"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prescriptionController_1 = require("../controllers/prescriptionController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// User routes
router.post('/', authMiddleware_1.protect, prescriptionController_1.uploadPrescription);
router.get('/my', authMiddleware_1.protect, prescriptionController_1.getMyPrescriptions);
// Admin routes
router.get('/admin', authMiddleware_1.protect, authMiddleware_1.adminOnly, prescriptionController_1.getAllPrescriptions);
router.put('/:id/status', authMiddleware_1.protect, authMiddleware_1.adminOnly, prescriptionController_1.updatePrescriptionStatus);
exports.default = router;
