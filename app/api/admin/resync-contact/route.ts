import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { mailchimpService } from '@/lib/mailchimp';

const prisma = new PrismaClient();

const resyncSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: NextRequest) {
  try {
    // Check admin authorization
    const authHeader = request.headers.get('authorization');
    const adminSecret = process.env.ADMIN_SECRET;
    
    if (!authHeader || !adminSecret || authHeader !== `Bearer ${adminSecret}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { email } = resyncSchema.parse(body);

    // Get the most recent consent log for this email
    const consentLog = await prisma.consentLog.findFirst({
      where: { email: email.toLowerCase() },
      orderBy: { consentDt: 'desc' },
    });

    if (!consentLog) {
      return NextResponse.json(
        { error: 'No consent log found for this email' },
        { status: 404 }
      );
    }

    // Determine tags based on consent source
    let tags: string[] = [];
    if (consentLog.consentSrc === 'canadahelps-csv-import') {
      // This is a member - check if they're lapsed
      const today = new Date().toISOString().split('T')[0];
      // We'd need to get renewal date from Mailchimp or store it locally
      // For now, assume active member
      tags = ['Member'];
    } else {
      // Newsletter subscriber
      tags = ['NewsletterOnly'];
    }

    const contactData = {
      email: consentLog.email,
      firstName: consentLog.firstName,
      lastName: consentLog.lastName,
      consentDt: consentLog.consentDt.toISOString(),
      consentSrc: consentLog.consentSrc,
      consentIp: consentLog.consentIp,
      status: 'active' as const,
    };

    const result = await mailchimpService.resyncContact(email, contactData, tags);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to resync contact', details: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Contact resynced successfully',
      contact: {
        email: consentLog.email,
        firstName: consentLog.firstName,
        lastName: consentLog.lastName,
        consentDt: consentLog.consentDt,
        consentSrc: consentLog.consentSrc,
        tags,
      },
    });

  } catch (error) {
    console.error('Contact resync error:', error);
    
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
    message: 'Contact resync endpoint',
    method: 'POST',
    required_headers: ['Authorization: Bearer <admin_secret>'],
    required_fields: ['email'],
  });
}
