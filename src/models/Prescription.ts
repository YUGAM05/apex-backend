import mongoose, { Schema, Document } from 'mongoose';

export interface IPrescription extends Document {
    user: mongoose.Types.ObjectId;
    imageUrl: string; // URL to secure storage (e.g., S3/Cloudinary)
    verifiedBy?: mongoose.Types.ObjectId; // Pharmacist ID
    status: 'pending' | 'verified' | 'rejected';
    notes?: string;
    linkedOrder?: mongoose.Types.ObjectId;
}

const PrescriptionSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    imageUrl: { type: String, required: true },
    verifiedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['pending', 'verified', 'rejected'], default: 'pending' },
    notes: { type: String },
    linkedOrder: { type: Schema.Types.ObjectId, ref: 'Order' }
}, { timestamps: true });

export default mongoose.model<IPrescription>('Prescription', PrescriptionSchema);
