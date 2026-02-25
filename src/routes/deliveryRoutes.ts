import express from 'express';
import { protect, deliveryOnly } from '../middleware/authMiddleware';
import {
    getDeliveryDashboard,
    getAvailableDeliveries,
    getMyDeliveries,
    acceptDelivery,
    confirmPickup,
    confirmDelivery,
    updateDeliveryStatus
} from '../controllers/deliveryController';

const router = express.Router();

router.get('/dashboard', protect, deliveryOnly, getDeliveryDashboard);
router.get('/available', protect, deliveryOnly, getAvailableDeliveries);
router.get('/my-deliveries', protect, deliveryOnly, getMyDeliveries);
router.put('/accept/:orderId', protect, deliveryOnly, acceptDelivery);
router.put('/pickup/:orderId', protect, deliveryOnly, confirmPickup);
router.put('/deliver/:orderId', protect, deliveryOnly, confirmDelivery);
router.put('/status/:orderId', protect, deliveryOnly, updateDeliveryStatus);
import { updateMyLocation } from '../controllers/deliveryController';
router.put('/location', protect, deliveryOnly, updateMyLocation);

export default router;
