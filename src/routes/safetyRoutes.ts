import express from 'express';
import { checkSafety, analyzeDrugSafety } from '../controllers/safetyController';
// import { protect } from '../middleware/authMiddleware'; // Optional

const router = express.Router();

// Comprehensive drug safety analysis
router.post('/analyze', analyzeDrugSafety);

// Drug interaction checker (existing)
router.post('/check', checkSafety);

export default router;
