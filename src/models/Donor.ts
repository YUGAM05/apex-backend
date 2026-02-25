import mongoose, { Schema, Document } from 'mongoose';

const DonorSchema: Schema = new Schema({
    donor_name: { type: String, required: true },
    blood_group: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    donor_phone: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Donor', DonorSchema);
