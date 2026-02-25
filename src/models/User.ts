import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    passwordHash?: string; // Optional for Google OAuth users
    googleId?: string;
    profilePicture?: string;
    role: 'customer' | 'seller' | 'delivery' | 'admin';
    status: 'pending' | 'approved' | 'rejected';
    phone?: string;
    address?: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    bankDetails?: {
        accountNumber: string;
        ifsc: string;
    };
    pharmacyCertificate?: string;
    location?: {
        lat: number;
        lng: number;
    };
    aadhaarNumber?: string;
    aadhaarCardUrl?: string;
    kyc_status?: 'Pending' | 'Verified' | 'Rejected';
    createdAt: Date;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String }, // Not required for Google OAuth users
    googleId: { type: String, unique: true, sparse: true }, // Google OAuth ID
    profilePicture: { type: String }, // Profile picture URL from Google
    role: { type: String, enum: ['customer', 'seller', 'delivery', 'admin'], default: 'customer' },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'approved' },
    phone: { type: String },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    bankDetails: {
        accountNumber: String,
        ifsc: String
    },
    pharmacyCertificate: { type: String },
    location: {
        lat: { type: Number, default: 23.0225 }, // Default to Ahmedabad lat
        lng: { type: Number, default: 72.5714 }  // Default to Ahmedabad lng
    },
    kyc_status: { type: String, enum: ['Pending', 'Verified', 'Rejected'], default: 'Pending' },
    aadhaarNumber: { type: String, sparse: true },
    aadhaarCardUrl: { type: String }
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
