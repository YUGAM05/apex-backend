import express from 'express';
import { initiatePhonePePayment, phonePeCallback, checkPaymentStatus } from '../controllers/paymentController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/phonepe/initiate', protect, initiatePhonePePayment);
router.post('/phonepe/callback', phonePeCallback);
router.get('/phonepe/status/:merchantTransactionId', protect, checkPaymentStatus);

export default router;
