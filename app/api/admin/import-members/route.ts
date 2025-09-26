import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { mailchimpService } from '@/lib/mailchimp';
import csv from 'csv-parser';
import { Readable } from 'stream';

const prisma = new PrismaClient();

const memberSchema = z.object({
  first: z.string().min(1, 'First name is required'),
  last: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  membership_start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  renewal_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
});

interface ImportResult {
  created: number;
  updated: number;
  errors: Array<{ row: number; email: string; error: string }>;
}

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

    const formData = await request.formData();
    const file = formData.get('csv') as File;
    const dryRun = formData.get('dryRun') === 'true';

    if (!file) {
      return NextResponse.json(
        { error: 'No CSV file provided' },
        { status: 400 }
      );
    }

    // Create import log
    const importLog = await prisma.importLog.create({
      data: {
        fileName: file.name,
        totalRows: 0,
        createdRows: 0,
        updatedRows: 0,
        errorRows: 0,
        status: 'running',
      },
    });

    const result: ImportResult = {
      created: 0,
      updated: 0,
      errors: [],
    };

    let rowNumber = 0;
    const today = new Date().toISOString().split('T')[0];

    // Parse CSV
    const csvData = await file.text();
    const rows = csvData.split('\n').filter(row => row.trim());

    await prisma.importLog.update({
      where: { id: importLog.id },
      data: { totalRows: rows.length - 1 }, // Subtract header row
    });

    for (const row of rows.slice(1)) { // Skip header
      rowNumber++;
      
      try {
        const columns = row.split(',').map(col => col.trim().replace(/"/g, ''));
        
        if (columns.length < 5) {
          result.errors.push({
            row: rowNumber,
            email: columns[2] || 'unknown',
            error: 'Insufficient columns',
          });
          continue;
        }

        const memberData = {
          first: columns[0],
          last: columns[1],
          email: columns[2],
          membership_start: columns[3],
          renewal_date: columns[4],
        };

        // Validate data
        const validatedData = memberSchema.parse(memberData);
        
        // Determine status based on renewal date
        const isLapsed = validatedData.renewal_date < today;
        const status = isLapsed ? 'lapsed' : 'active';
        const tags = isLapsed ? ['LapsedMember'] : ['Member'];

        if (!dryRun) {
          // Check if contact exists in Mailchimp
          const existingContact = await mailchimpService.getContact(validatedData.email);
          
          const contactData = {
            email: validatedData.email.toLowerCase(),
            firstName: validatedData.first,
            lastName: validatedData.last,
            consentDt: new Date().toISOString(),
            consentSrc: 'canadahelps-csv-import',
            consentIp: '127.0.0.1', // Admin import
            memberSince: validatedData.membership_start,
            renewalDt: validatedData.renewal_date,
            status: status as 'active' | 'lapsed',
          };

          const mailchimpResult = await mailchimpService.upsertContact(contactData, tags);
          
          if (mailchimpResult.success) {
            if (existingContact) {
              result.updated++;
            } else {
              result.created++;
            }
          } else {
            result.errors.push({
              row: rowNumber,
              email: validatedData.email,
              error: mailchimpResult.error || 'Unknown error',
            });
          }
        } else {
          // Dry run - just validate
          result.created++;
        }

      } catch (error) {
        result.errors.push({
          row: rowNumber,
          email: 'unknown',
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }

    // Update import log
    await prisma.importLog.update({
      where: { id: importLog.id },
      data: {
        createdRows: result.created,
        updatedRows: result.updated,
        errorRows: result.errors.length,
        errors: JSON.stringify(result.errors),
        status: 'completed',
        completedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      dryRun,
      result,
      importLogId: importLog.id,
    });

  } catch (error) {
    console.error('CSV import error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'CSV import endpoint',
    method: 'POST',
    required_headers: ['Authorization: Bearer <admin_secret>'],
    required_fields: ['csv (file)', 'dryRun (boolean)'],
    csv_format: {
      columns: ['first', 'last', 'email', 'membership_start', 'renewal_date'],
      example: 'John,Doe,john@example.com,2023-01-01,2024-01-01',
    },
  });
}
