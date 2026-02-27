import app, { connectDB } from './app';

// Connect to DB on every cold start (Vercel serverless)
// FIX: Wrapped in catch so a DB connection failure doesn't silently
// crash the handler and return a blank 500 with no error message.
connectDB().catch((err) => {
    console.error('[handler] DB connection failed on cold start:', err);
});

export default app;