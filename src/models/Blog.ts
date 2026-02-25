import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
    title: string;
    description: string;
    content: string;
    category: string;
    imageUrl?: string;
    author: string;
    authorRole?: string;
    readTime: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}

const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String },
    author: { type: String, required: true },
    authorRole: { type: String, default: 'Author' },
    readTime: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model<IBlog>('Blog', BlogSchema);
