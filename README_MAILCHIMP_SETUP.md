# RTLMB Email Capture & Membership Sync

This document provides setup instructions for RTLMB's email capture and membership synchronization system with Mailchimp integration.

## Overview

The system provides:
- Newsletter subscription via website form
- CSV import for CanadaHelps member data
- Automatic tagging and merge field management
- Admin interface for contact management
- Rate limiting and consent logging

## Prerequisites

- Node.js 18+ 
- Mailchimp account with API access
- Admin access to RTLMB website

## Environment Setup

1. Copy the example environment file:
```bash
cp env.example .env.local
```

2. Update `.env.local` with your actual values:
```env
# Mailchimp Configuration
MAILCHIMP_API_KEY=your-api-key-here
MAILCHIMP_SERVER_PREFIX=us21
MAILCHIMP_AUDIENCE_ID=your-audience-id-here

# Database
DATABASE_URL="file:./dev.db"

# Admin Security
ADMIN_SECRET=your-secure-admin-secret-here

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

## Finding Your Mailchimp Configuration

### 1. Get Your API Key
1. Log into your Mailchimp account
2. Go to Account → Extras → API Keys
3. Create a new API key or copy existing one
4. The API key includes the server prefix (e.g., `abc123def456-us21`)

### 2. Get Your Audience ID
1. In Mailchimp, go to Audience → Settings → Audience name and defaults
2. Copy the "Audience ID" (e.g., `65cd9fff23`)

### 3. Set Up Merge Fields
In Mailchimp, go to Audience → Settings → Audience fields and |MERGE| tags and add these merge fields:

- **FNAME** (First Name) - Text field
- **LNAME** (Last Name) - Text field  
- **CONSENT_DT** (Consent Date) - Date field
- **CONSENT_SRC** (Consent Source) - Text field
- **CONSENT_IP** (Consent IP) - Text field
- **MEMBER_SINCE** (Member Since) - Date field
- **RENEWAL_DT** (Renewal Date) - Date field
- **STATUS** (Status) - Text field

### 4. Set Up Tags
Create these tags in Mailchimp:
- **Member** - For active members
- **NewsletterOnly** - For newsletter subscribers
- **LapsedMember** - For lapsed members

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up the database:
```bash
npx prisma db push
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Newsletter Subscription
- **POST** `/api/newsletter/subscribe`
- **Body**: `{ email, fname?, lname?, consent_ip, consent_src? }`
- **Rate Limited**: 5 requests per 15 minutes per IP

### CSV Import (Admin)
- **POST** `/api/admin/import-members`
- **Headers**: `Authorization: Bearer <admin_secret>`
- **Body**: FormData with CSV file and dryRun boolean

### Contact Resync (Admin)
- **POST** `/api/admin/resync-contact`
- **Headers**: `Authorization: Bearer <admin_secret>`
- **Body**: `{ email }`

## CSV Format

The CSV import expects this format:
```csv
first,last,email,membership_start,renewal_date
John,Doe,john@example.com,2023-01-01,2024-01-01
Jane,Smith,jane@example.com,2023-06-15,2024-06-15
```

## Admin Interface

Access the admin interface at `/admin` with your admin secret.

Features:
- CSV upload with dry-run validation
- Contact resync by email
- Import progress tracking
- Error reporting

## Mailchimp Automations Setup

### 1. Welcome Series (Newsletter Subscribers)
1. Go to Marketing → Automations
2. Create new automation
3. Choose "Welcome new subscribers"
4. Set trigger: Tag = "NewsletterOnly"
5. Create email sequence:
   - Email 1: Welcome message (immediate)
   - Email 2: Getting started guide (1 day delay)
   - Email 3: Event updates (1 week delay)

### 2. Renewal Sequence (Members)
1. Create new automation
2. Choose "Date-based trigger"
3. Set trigger: Date field = "RENEWAL_DT"
4. Create email sequence:
   - Email 1: Renewal reminder (60 days before)
   - Email 2: Urgent renewal (30 days before)
   - Email 3: Final notice (7 days before)

### 3. Lapsed Win-back (Lapsed Members)
1. Create new automation
2. Choose "Tag-based trigger"
3. Set trigger: Tag added = "LapsedMember"
4. Create email sequence:
   - Email 1: We miss you (immediate)
   - Email 2: Special offer (1 week delay)
   - Email 3: Final appeal (2 weeks delay)

## Compliance Features

### CASL Compliance
- All emails include unsubscribe links
- Physical mailing address in footer
- Consent logging with IP and timestamp
- Clear opt-in process

### Data Protection
- Rate limiting on all endpoints
- Input validation with Zod
- SQL injection protection via Prisma
- Secure admin authentication

## Monitoring

### Database Logs
- `ConsentLog` table tracks all subscriptions
- `ImportLog` table tracks CSV imports
- Query logs for analytics and compliance

### Error Handling
- All API errors are logged
- User-friendly error messages
- Admin notifications for critical errors

## Security Best Practices

1. **Rotate API keys quarterly**
2. **Use strong admin secrets**
3. **Monitor rate limiting**
4. **Regular database backups**
5. **Keep dependencies updated**

## Troubleshooting

### Common Issues

1. **Mailchimp API errors**
   - Check API key and server prefix
   - Verify audience ID
   - Ensure merge fields exist

2. **Database connection issues**
   - Check DATABASE_URL format
   - Run `npx prisma db push`

3. **Rate limiting**
   - Check IP-based limits
   - Adjust limits in `.env.local`

4. **CSV import failures**
   - Verify CSV format
   - Check file encoding (UTF-8)
   - Review error logs

### Support

For technical issues:
1. Check server logs
2. Review database logs
3. Test API endpoints individually
4. Contact system administrator

## Production Deployment

1. Set up production database
2. Configure environment variables
3. Set up monitoring and alerts
4. Test all functionality
5. Deploy with proper security measures

## Maintenance

### Weekly
- Review import logs
- Check error rates
- Monitor rate limiting

### Monthly
- Review consent logs
- Update member statuses
- Check automation performance

### Quarterly
- Rotate API keys
- Review security settings
- Update dependencies
