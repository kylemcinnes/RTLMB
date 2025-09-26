import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { PrismaClient } from '@prisma/client';
import { mailchimpService } from '@/lib/mailchimp';

const prisma = new PrismaClient();

// Rate limiter: 5 requests per 15 minutes per IP
const rateLimiter = new RateLimiterMemory({
  keyPrefix: 'newsletter_subscribe',
  points: 5, // Number of requests
  duration: 900, // Per 15 minutes
});

const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  fname: z.string().optional(),
  lname: z.string().optional(),
  consent_ip: z.string().ip('Invalid IP address'),
  consent_src: z.string().default('rtlmb.org/newsletter'),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     '127.0.0.1';
    
    try {
      await rateLimiter.consume(clientIP);
    } catch (rejRes) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = subscribeSchema.parse(body);

    const {
      email,
      fname,
      lname,
      consent_ip,
      consent_src
    } = validatedData;

    const userAgent = request.headers.get('user-agent') || '';
    const consentDt = new Date().toISOString();

    // Log consent in database
    await prisma.consentLog.create({
      data: {
        email: email.toLowerCase(),
        firstName: fname,
        lastName: lname,
        consentDt: new Date(consentDt),
        consentSrc: consent_src,
        consentIp: consent_ip,
        userAgent,
        policyVersion: '1.0',
      },
    });

    // Prepare contact data for Mailchimp
    const contactData = {
      email: email.toLowerCase(),
      firstName: fname,
      lastName: lname,
      consentDt,
      consentSrc: consent_src,
      consentIp: consent_ip,
      status: 'active' as const,
    };

    // Upsert to Mailchimp
    const result = await mailchimpService.upsertContact(contactData, ['NewsletterOnly']);

    if (!result.success) {
      console.error('Mailchimp error:', result.error);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Newsletter subscription endpoint',
    method: 'POST',
    required_fields: ['email', 'consent_ip'],
    optional_fields: ['fname', 'lname', 'consent_src'],
  });
}
