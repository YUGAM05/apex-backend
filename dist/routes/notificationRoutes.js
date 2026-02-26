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
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const Notification_1 = __importDefault(require("../models/Notification"));
const router = express_1.default.Router();
// @desc    Get all notifications for logged in user
// @route   GET /api/notifications
// @access  Private
router.get('/', authMiddleware_1.protect, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notifications = yield Notification_1.default.find({ user: req.user.id })
            .sort({ createdAt: -1 })
            .limit(20);
        res.json(notifications);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching notifications' });
    }
}));
// @desc    Mark notification as read
// @route   PUT /api/notifications/:id/read
// @access  Private
router.put('/:id/read', authMiddleware_1.protect, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notification = yield Notification_1.default.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, { read: true }, { new: true });
        res.json(notification);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating notification' });
    }
}));
// @desc    Mark all as read
// @route   PUT /api/notifications/read-all
// @access  Private
router.put('/read-all', authMiddleware_1.protect, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Notification_1.default.updateMany({ user: req.user.id, read: false }, { read: true });
        res.json({ message: 'All marked as read' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating notifications' });
    }
}));
exports.default = router;
