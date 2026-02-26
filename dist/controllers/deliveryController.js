"use strict";
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
exports.updateDeliveryStatus = exports.acceptDelivery = exports.getMyDeliveries = exports.getAvailableDeliveries = exports.getDeliveryDashboard = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const getDeliveryDashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const assignedCount = yield Order_1.default.countDocuments({ assignedDelivery: req.user.id, orderStatus: { $ne: 'delivered' } });
        const completedCount = yield Order_1.default.countDocuments({ assignedDelivery: req.user.id, orderStatus: 'delivered' });
        res.json({
            stats: {
                currentDeliveries: assignedCount,
                completedDeliveries: completedCount
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching delivery stats', error });
    }
});
exports.getDeliveryDashboard = getDeliveryDashboard;
const getAvailableDeliveries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Orders that are paid/processing but not yet assigned
        const orders = yield Order_1.default.find({
            orderStatus: { $in: ['processing', 'confirmed'] },
            assignedDelivery: { $exists: false }
        }).populate('user', 'name email phone');
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching available deliveries', error });
    }
});
exports.getAvailableDeliveries = getAvailableDeliveries;
const getMyDeliveries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield Order_1.default.find({ assignedDelivery: req.user.id });
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching your deliveries', error });
    }
});
exports.getMyDeliveries = getMyDeliveries;
const acceptDelivery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const order = yield Order_1.default.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        if (order.assignedDelivery) {
            return res.status(400).json({ message: 'Order already assigned' });
        }
        order.assignedDelivery = req.user.id;
        order.orderStatus = 'shipped'; // Assume picking it up implies shipping starts
        yield order.save();
        res.json({ message: 'Delivery accepted', order });
    }
    catch (error) {
        res.status(500).json({ message: 'Error accepting delivery', error });
    }
});
exports.acceptDelivery = acceptDelivery;
const updateDeliveryStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const { status } = req.body; // should be 'delivered'
        const order = yield Order_1.default.findOne({ _id: orderId, assignedDelivery: req.user.id });
        if (!order) {
            return res.status(404).json({ message: 'Order not found or not assigned to you' });
        }
        if (status)
            order.orderStatus = status;
        yield order.save();
        res.json({ message: 'Order status updated', order });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating status', error });
    }
});
exports.updateDeliveryStatus = updateDeliveryStatus;
