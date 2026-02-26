import mongoose, { Document, Schema } from 'mongoose';

export interface IOrder extends Document {
    user: mongoose.Types.ObjectId;
    items: Array<{
        product: mongoose.Types.ObjectId;
        name: string;
        price: number;
        quantity: number;
        image: string;
    }>;
    shippingAddress: {
        fullName: string;
        phone: string;
        email: string;
        addressLine1: string;
        addressLine2?: string;
        city: string;
        state: string;
        pinCode: string;
        addressType: string;
    };
    totalAmount: number;
    medicineSubtotal: number;
    platformFee: number;
    sellerCommission: number;
    deliveryFee?: number;
    adminDeliveryCommission?: number;
    paymentMethod: string;
    paymentStatus: 'pending' | 'paid' | 'failed';
    orderStatus: 'pending' | 'confirmed' | 'shipped' | 'out_for_pickup' | 'picked_up' | 'out_for_delivery' | 'delivered' | 'cancelled';
    assignedDelivery?: mongoose.Types.ObjectId;
    deliveryDistance?: number;
    deliveryEarning?: number;
    shippingLocation?: {
        lat: number;
        lng: number;
    };
    notes?: string;
    couponCode?: string;
    discountAmount?: number;
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        product: { type: Schema.Types.ObjectId, ref: 'Inventory' },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String }
    }],
    shippingAddress: {
        fullName: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        addressLine1: { type: String, required: true },
        addressLine2: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pinCode: { type: String, required: true },
        addressType: { type: String, enum: ['home', 'office'], default: 'home' }
    },
    totalAmount: { type: Number, required: true },
    medicineSubtotal: { type: Number, required: true },
    platformFee: { type: Number, required: true, default: 10 },
    sellerCommission: { type: Number, required: true },
    deliveryFee: { type: Number },
    adminDeliveryCommission: { type: Number },
    paymentMethod: { type: String, required: true, default: 'cod' },
    paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    orderStatus: { type: String, enum: ['pending', 'confirmed', 'shipped', 'out_for_pickup', 'picked_up', 'out_for_delivery', 'delivered', 'cancelled'], default: 'pending' },
    assignedDelivery: { type: Schema.Types.ObjectId, ref: 'User' },
    deliveryDistance: { type: Number },
    deliveryEarning: { type: Number },
    shippingLocation: {
        lat: { type: Number },
        lng: { type: Number }
    },
    notes: { type: String },
    couponCode: { type: String },
    discountAmount: { type: Number, default: 0 }

}, { timestamps: true });

export default mongoose.model<IOrder>('Order', OrderSchema);