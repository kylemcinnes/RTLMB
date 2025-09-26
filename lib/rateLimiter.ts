import { RateLimiterMemory } from 'rate-limiter-flexible';

// Rate limiter for newsletter subscriptions
export const newsletterRateLimiter = new RateLimiterMemory({
  keyPrefix: 'newsletter_subscribe',
  points: 5, // Number of requests
  duration: 900, // Per 15 minutes (900 seconds)
});

// Rate limiter for admin operations
export const adminRateLimiter = new RateLimiterMemory({
  keyPrefix: 'admin_operations',
  points: 10, // Number of requests
  duration: 3600, // Per hour (3600 seconds)
});

export async function checkRateLimit(
  rateLimiter: RateLimiterMemory,
  key: string
): Promise<{ allowed: boolean; remainingPoints?: number; msBeforeNext?: number }> {
  try {
    const resRateLimiter = await rateLimiter.consume(key);
    return {
      allowed: true,
      remainingPoints: resRateLimiter.remainingPoints,
      msBeforeNext: resRateLimiter.msBeforeNext,
    };
  } catch (rejRes) {
    return {
      allowed: false,
      remainingPoints: 0,
      msBeforeNext: rejRes.msBeforeNext,
    };
  }
}
