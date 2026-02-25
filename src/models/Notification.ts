import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
    user: mongoose.Types.ObjectId;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    read: boolean;
    relatedId?: mongoose.Types.ObjectId; // E.g., Product ID or Order ID
    createdAt: Date;
}

const NotificationSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    type: {
        type: String,
        enum: ['info', 'success', 'warning', 'error'],
        default: 'info'
    },
    read: { type: Boolean, default: false },
    relatedId: { type: Schema.Types.ObjectId }
}, { timestamps: true });

export default mongoose.model<INotification>('Notification', NotificationSchema);
