import mongoose, { Document, Schema } from 'mongoose';

export interface IHealthTip extends Document {
    title: string;
    description: string;
    date: Date;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

const HealthTipSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    imageUrl: { type: String },
}, { timestamps: true });

export default mongoose.model<IHealthTip>('HealthTip', HealthTipSchema);
