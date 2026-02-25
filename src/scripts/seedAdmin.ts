import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from '../models/User';

dotenv.config();

const seedAdmin = async () => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/e-pharmacy';
        console.log('Connecting to MongoDB at:', uri);
        await mongoose.connect(uri);
        console.log('Connected! Creating Admin...');

        const email = 'admin@life-link.com';
        const password = 'admin';

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = await User.findOneAndUpdate(
            { email },
            {
                name: 'Super Admin',
                email,
                passwordHash,
                role: 'admin'
            },
            { upsert: true, new: true }
        );

        console.log('-----------------------------------');
        console.log('✅ Admin Account Ready');
        console.log('📧 Email:    ' + email);
        console.log('🔑 Password: ' + password);
        console.log('-----------------------------------');
        process.exit(0);
    } catch (error) {
        console.error('Failed to seed admin:', error);
        process.exit(1);
    }
};

seedAdmin();
