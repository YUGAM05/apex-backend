import express from 'express';
import { protect, sellerOnly } from '../middleware/authMiddleware';
import { getSellerDashboard, getSellerInventory, addSellerProduct, updateSellerProduct, deleteSellerProduct } from '../controllers/sellerController';

const router = express.Router();

// Product Routes
router.get('/dashboard', protect, sellerOnly, getSellerDashboard);
router.get('/inventory', protect, sellerOnly, getSellerInventory);
router.post('/inventory', protect, sellerOnly, addSellerProduct);
router.put('/inventory/:id', protect, sellerOnly, updateSellerProduct);
router.delete('/inventory/:id', protect, sellerOnly, deleteSellerProduct);

// Order Routes
import { getSellerOrders, updateOrderStatus, updateSellerProfile } from '../controllers/sellerController';
router.get('/orders', protect, sellerOnly, getSellerOrders);
router.put('/orders/:id/status', protect, sellerOnly, updateOrderStatus);
router.put('/profile', protect, sellerOnly, updateSellerProfile);

export default router;
