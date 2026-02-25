import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI_UNSECURED = 'mongodb://localhost:27017/admin';

async function createUser() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI_UNSECURED);
        console.log('Connected!');

        const db = mongoose.connection.db;

        console.log('Creating admin user...');
        // @ts-ignore
        await db.command({
            createUser: "admin",
            pwd: "admin123",
            roles: [
                { role: "root", db: "admin" }
            ]
        });

        console.log('Successfully created admin user!');
        console.log('Username: admin');
        console.log('Password: admin123');
        process.exit(0);
    } catch (error: any) {
        if (error.message.includes('already exists')) {
            console.log('User already exists.');
            process.exit(0);
        }
        console.error('Error creating user:', error);
        process.exit(1);
    }
}

createUser();
