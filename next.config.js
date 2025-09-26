/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_SERVER_PREFIX: process.env.MAILCHIMP_SERVER_PREFIX,
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,
    DATABASE_URL: process.env.DATABASE_URL,
    ADMIN_SECRET: process.env.ADMIN_SECRET,
  },
  async redirects() {
    return [
      { source: '/newsletters', destination: '/events/40-days-for-life', permanent: true },
      { source: '/newsletter', destination: '/events/40-days-for-life', permanent: true },
      { source: '/past-newsletters', destination: '/events/life-chain', permanent: true },
    ];
  },
}

module.exports = nextConfig
