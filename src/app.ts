import dotenv from 'dotenv';
dotenv.config();
// Triggering restart to refresh env variables

import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from './config/passport';

const app = express();
const PORT = process.env.PORT || 5000;

// Express middleware
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// Highly explicit CORS configuration to fix 500 OPTIONS preflight errors
const corsOptions = {
    origin: [
        'https://apex-backend-theta.vercel.app',
        'http://localhost:3001',
        'https://apex-admin-panel.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests for all routes

app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(morgan('dev'));

// Session middleware for Passport
app.use(session({
    secret: process.env.SESSION_SECRET || 'fallback_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
import authRoutes from './routes/authRoutes';
import bloodBankRoutes from './routes/bloodBankRoutes';
import safetyRoutes from './routes/safetyRoutes';
import adminRoutes from './routes/adminRoutes';
import sellerRoutes from './routes/sellerRoutes';
import actionRoutes from './routes/deliveryRoutes';
import deliveryRoutes from './routes/deliveryRoutes';
import productRoutes from './routes/productRoutes';
import notificationRoutes from './routes/notificationRoutes';
import prescriptionRoutes from './routes/prescriptionRoutes';
import hospitalRoutes from './routes/hospitalRoutes';
import orderRoutes from './routes/orderRoutes';
import healthHubRoutes from './routes/healthHubRoutes';
import supportRoutes from './routes/supportRoutes';
import blogRoutes from './routes/blogRoutes';
import aiRoutes from './routes/aiRoutes';
import couponRoutes from './routes/couponRoutes';

app.use('/api/auth', authRoutes);
app.use('/api/blood-bank', bloodBankRoutes);
app.use('/api/safety', safetyRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/health-hub', healthHubRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/coupons', couponRoutes);

// Static serving for uploads
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Basic Health Check
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'E-Pharmacy API is running',
        services: {
            aiSafetyChecker: 'Active',
            bloodBank: 'Active'
        }
    });
});

// Database Connection
export const connectDB = async () => {
    // Avoid reconnecting if already connected (important for Vercel serverless warm starts)
    if (mongoose.connection.readyState >= 1) return;

    try {
        if (!process.env.MONGO_URI) {
            console.warn('MONGO_URI not found in env, skipping DB connect for now.');
            return;
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected!');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        process.exit(1);
    }
};

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('[GlobalError]', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// ─── Local Development Only ───────────────────────────────────────────────────
// On Vercel, the app is exported as a serverless handler (see src/handler.ts).
// app.listen() is intentionally NOT called in production/serverless environments.
try {
    if (process.env.NODE_ENV !== 'production') {
        app.listen(PORT, async () => {
            try {
                await connectDB();
                console.log(`Server running on port ${PORT} - Payload Limit 50mb Active `);
            } catch (dbErr) {
                console.error('Database connection failed during startup:', dbErr);
            }
        });
    }
} catch (startupErr) {
    console.error('Fatal Server Initialization Error:', startupErr);
}

// Export the app for Vercel serverless handler (src/handler.ts)
export default app;