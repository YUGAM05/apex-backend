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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = exports.getUserOrders = exports.createOrder = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const Inventory_1 = __importDefault(require("../models/Inventory"));
// @desc    Create new order
// @route   POST /api/orders
// @access  Private (user must be logged in)
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { items, shippingAddress, totalAmount, paymentMethod, notes } = req.body;
        // Validate required fields
        if (!items || !shippingAddress || !totalAmount) {
            res.status(400).json({ message: 'Missing required fields' });
            return;
        }
        // Verify user is authenticated
        if (!req.user) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }
        // Check stock availability for all items
        for (const item of items) {
            const product = yield Inventory_1.default.findById(item.productId);
            if (!product) {
                res.status(404).json({ message: `Product ${item.name} not found` });
                return;
            }
            if (product.stock < item.quantity) {
                res.status(400).json({ message: `Only ${product.stock} left in stock for ${item.name}` });
                return;
            }
        }
        // Create order
        const order = yield Order_1.default.create({
            user: req.user._id,
            items: items.map((item) => ({
                product: item.productId,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.image
            })),
            shippingAddress,
            totalAmount,
            paymentMethod: paymentMethod || 'cod',
            paymentStatus: 'pending',
            orderStatus: 'pending',
            notes
        });
        // Update stock for each product
        for (const item of items) {
            yield Inventory_1.default.findByIdAndUpdate(item.productId, { $inc: { stock: -item.quantity } });
        }
        // 🚀 AUTOMATION: Send WhatsApp Bill
        try {
            const { sendWhatsAppBill } = yield Promise.resolve().then(() => __importStar(require('../services/whatsappService')));
            if (shippingAddress && shippingAddress.phone) {
                const customerName = req.user.name || shippingAddress.fullName;
                sendWhatsAppBill(shippingAddress.phone, customerName, order._id.toString().slice(-8).toUpperCase(), totalAmount, `http://localhost:3000/order-success/${order._id}`).catch((err) => console.error('WhatsApp Automation Failed:', err));
            }
        }
        catch (waError) {
            console.error('Failed to init WhatsApp service:', waError);
        }
        res.status(201).json(order);
    }
    catch (error) {
        console.error('Order creation error:', error);
        res.status(500).json({ message: 'Error creating order', error });
    }
});
exports.createOrder = createOrder;
// @desc    Get user's orders
// @route   GET /api/orders
// @access  Private
const getUserOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }
        const orders = yield Order_1.default.find({ user: req.user._id })
            .sort({ createdAt: -1 })
            .populate('items.product', 'name category');
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
});
exports.getUserOrders = getUserOrders;
// @desc    Get single order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order_1.default.findById(req.params.id)
            .populate('items.product', 'name category')
            .populate('user', 'name email');
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        // Check if user owns this order
        if (!req.user || order.user._id.toString() !== req.user._id.toString()) {
            res.status(403).json({ message: 'Not authorized to view this order' });
            return;
        }
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching order', error });
    }
});
exports.getOrderById = getOrderById;
