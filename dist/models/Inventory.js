"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const InventorySchema = new mongoose_1.Schema({
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
    seller: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    adminComments: { type: String },
    isDealOfDay: { type: Boolean, default: false } // NEW: Deal of the day flag
}, { timestamps: true });
exports.default = mongoose_1.default.model('Inventory', InventorySchema);
