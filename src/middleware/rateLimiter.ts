import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
<<<<<<< HEAD
  max: 50, // 50 per IP
=======
  max: 70,
>>>>>>> 517fb8c439e96524b124d7685e53349cdacd4585
  message: 'You have exceeded the 70 requests in 24 hrs limit!', 
  standardHeaders: true,
  legacyHeaders: false,
});