#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });
const { mailchimpService } = require('../lib/mailchimp');

async function testMailchimpConnection() {
  console.log('🔍 Testing Mailchimp connection...\n');
  
  // Check environment variables
  const requiredEnvVars = ['MAILCHIMP_API_KEY', 'MAILCHIMP_SERVER_PREFIX', 'MAILCHIMP_AUDIENCE_ID'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    console.error('\nPlease update your .env.local file with the correct values.');
    process.exit(1);
  }
  
  console.log('✅ Environment variables configured');
  console.log(`   - API Key: ${process.env.MAILCHIMP_API_KEY?.substring(0, 10)}...`);
  console.log(`   - Server Prefix: ${process.env.MAILCHIMP_SERVER_PREFIX}`);
  console.log(`   - Audience ID: ${process.env.MAILCHIMP_AUDIENCE_ID}\n`);
  
  // Test connection
  try {
    const result = await mailchimpService.testConnection();
    
    if (result.success) {
      console.log('✅ Mailchimp connection successful!');
      console.log('   Your API credentials are working correctly.\n');
    } else {
      console.error('❌ Mailchimp connection failed:');
      console.error(`   ${result.error}\n`);
      console.error('Please check your API key and audience ID.');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Unexpected error testing Mailchimp connection:');
    console.error(`   ${error.message}\n`);
    process.exit(1);
  }
  
  // Test contact upsert
  console.log('🧪 Testing contact upsert...');
  try {
    const testContact = {
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
      consentDt: new Date().toISOString(),
      consentSrc: 'test-connection',
      consentIp: '127.0.0.1',
      status: 'active',
    };
    
    const result = await mailchimpService.upsertContact(testContact, ['NewsletterOnly']);
    
    if (result.success) {
      console.log('✅ Contact upsert test successful!');
      console.log('   Test contact was created/updated in Mailchimp.\n');
    } else {
      console.error('❌ Contact upsert test failed:');
      console.error(`   ${result.error}\n`);
      console.error('Please check your merge fields and tags setup in Mailchimp.');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Unexpected error testing contact upsert:');
    console.error(`   ${error.message}\n`);
    process.exit(1);
  }
  
  console.log('🎉 All tests passed! Your Mailchimp integration is ready to use.');
  console.log('\nNext steps:');
  console.log('1. Set up your Mailchimp automations (see README_MAILCHIMP_SETUP.md)');
  console.log('2. Test the newsletter subscription form');
  console.log('3. Test the CSV import functionality');
}

testMailchimpConnection().catch(console.error);
