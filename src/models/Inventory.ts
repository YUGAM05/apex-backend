import mongoose, { Schema, Document } from 'mongoose';

export interface IInventory extends Document {
    name: string;
    description: string;
    category: 'Tablets & Capsules' | 'Syrups & Liquids' | 'Ayurvedic' | 'Vitamins & Supplements' | 'Baby Care' | 'Personal Care' | 'Medical Devices' | 'Healthcare Devices' | 'First Aid';
    actualPrice: number;
    sellingPrice: number;
    discount: number;
    stock: number;
    returnPolicy?: string;
    directionsForUse?: string;
    safetyInformation?: string;
    faqs?: { question: string, answer: string }[];
    manufacturer: string;
    requiresPrescription: boolean;
    drugInteractions: string[];
    imageUrl?: string; // Kept for backward compatibility
    images: string[]; // New: Multiple images
    expiryDate: Date;
    mfgDate: Date; // New: Manufacturing Date
    company: string; // New: Company Details
    seller: mongoose.Types.ObjectId;
    status: 'pending' | 'approved' | 'rejected';
    adminComments?: string;
    isDealOfDay: boolean;  // NEW: Flag for deal of the day
}

const InventorySchema: Schema = new Schema({
    name: { type: String, required: true, index: true },
    description: { type: String },
    category: { type: String, enum: ['Tablets & Capsules', 'Syrups & Liquids', 'Ayurvedic', 'Vitamins & Supplements', 'Baby Care', 'Personal Care', 'Medical Devices', 'Healthcare Devices', 'First Aid'], required: true },
    actualPrice: { type: Number, required: true }, // MRP
    sellingPrice: { type: Number, required: true }, // Discounted Price
    discount: { type: Number, default: 0 }, // Percentage off
    stock: { type: Number, required: true, min: 0 },
    manufacturer: { type: String },
    requiresPrescription: { type: Boolean, default: false },
    drugInteractions: [{ type: String }],
    returnPolicy: { type: String },
    directionsForUse: { type: String },
    safetyInformation: { type: String },
    faqs: [{
        question: { type: String },
        answer: { type: String }
    }],
    imageUrl: { type: String },
    images: [{ type: String }], // Array of image URLs/Base64
    expiryDate: { type: Date, required: true },
    mfgDate: { type: Date }, // Optional or Required? User asked to add it. Let's make it standard.
    company: { type: String },
    seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    adminComments: { type: String },
    isDealOfDay: { type: Boolean, default: false }  // NEW: Deal of the day flag
}, { timestamps: true });

export default mongoose.model<IInventory>('Inventory', InventorySchema);
