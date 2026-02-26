import app, { connectDB } from './app';

// Connect DB once on cold start, then hand off to Express
connectDB();

export default app;