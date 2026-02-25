import express from 'express';
import { createCoupon, getAllCoupons, updateCoupon, deleteCoupon, validateCoupon } from '../controllers/couponController';

const router = express.Router();

// Admin routes
router.post('/admin', createCoupon);
router.get('/admin', getAllCoupons);
router.put('/admin/:id', updateCoupon);
router.delete('/admin/:id', deleteCoupon);

// User routes
router.post('/validate', validateCoupon);

export default router;
