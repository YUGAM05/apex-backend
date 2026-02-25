import express from 'express';
import { uploadPrescription, getMyPrescriptions, getAllPrescriptions, updatePrescriptionStatus } from '../controllers/prescriptionController';
import { protect, adminOnly } from '../middleware/authMiddleware';

const router = express.Router();

// User routes
router.post('/', protect, uploadPrescription);
router.get('/my', protect, getMyPrescriptions);

// Admin routes
router.get('/admin', protect, adminOnly, getAllPrescriptions);
router.put('/:id/status', protect, adminOnly, updatePrescriptionStatus);

export default router;
