#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up RTLMB Email Capture & Membership Sync...\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local from template...');
  const envExample = fs.readFileSync(path.join(process.cwd(), 'env.example'), 'utf8');
  fs.writeFileSync(envPath, envExample);
  console.log('✅ Created .env.local - Please update with your actual values\n');
} else {
  console.log('✅ .env.local already exists\n');
}

// Check if node_modules exists
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed\n');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ Dependencies already installed\n');
}

// Check if database exists
const dbPath = path.join(process.cwd(), 'dev.db');
if (!fs.existsSync(dbPath)) {
  console.log('🗄️  Setting up database...');
  try {
    execSync('npx prisma db push', { stdio: 'inherit' });
    console.log('✅ Database created and schema applied\n');
  } catch (error) {
    console.error('❌ Failed to set up database:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ Database already exists\n');
}

console.log('🎉 Setup complete! Next steps:\n');
console.log('1. Update .env.local with your Mailchimp credentials');
console.log('2. Set up merge fields and tags in Mailchimp (see README_MAILCHIMP_SETUP.md)');
console.log('3. Run "npm run dev" to start the development server');
console.log('4. Visit /admin to test the CSV import functionality');
console.log('\n📚 For detailed setup instructions, see README_MAILCHIMP_SETUP.md');
