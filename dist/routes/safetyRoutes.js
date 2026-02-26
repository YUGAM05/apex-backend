"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const safetyController_1 = require("../controllers/safetyController");
// import { protect } from '../middleware/authMiddleware'; // Optional
const router = express_1.default.Router();
// Comprehensive drug safety analysis
router.post('/analyze', safetyController_1.analyzeDrugSafety);
// Drug interaction checker (existing)
router.post('/check', safetyController_1.checkSafety);
exports.default = router;
