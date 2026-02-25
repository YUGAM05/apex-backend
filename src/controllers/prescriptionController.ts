import { Request, Response } from 'express';
import Prescription from '../models/Prescription';
import { AuthRequest } from '../middleware/authMiddleware';

// @desc    Upload a new prescription
// @route   POST /api/prescriptions
// @access  Private (User)
export const uploadPrescription = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { imageUrl, notes } = req.body;

        if (!imageUrl) {
            res.status(400).json({ message: 'Image URL is required' });
            return;
        }

        const prescription = await Prescription.create({
            user: req.user?._id,
            imageUrl,
            notes,
            status: 'pending'
        });

        res.status(201).json(prescription);
    } catch (error) {
        res.status(500).json({ message: 'Error uploading prescription', error });
    }
};

// @desc    Get logged in user's prescriptions
// @route   GET /api/prescriptions/my
// @access  Private (User)
export const getMyPrescriptions = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const prescriptions = await Prescription.find({ user: req.user?._id }).sort({ createdAt: -1 });
        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching prescriptions', error });
    }
};

// @desc    Get all prescriptions (Admin)
// @route   GET /api/prescriptions/admin
// @access  Private (Admin)
export const getAllPrescriptions = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        // Can filter by status via query query params if needed
        const status = req.query.status;
        const query = status ? { status } : {};

        const prescriptions = await Prescription.find(query)
            .populate('user', 'name email')
            .sort({ createdAt: -1 });

        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching prescriptions', error });
    }
};

// @desc    Update prescription status (Admin)
// @route   PUT /api/prescriptions/:id/status
// @access  Private (Admin)
export const updatePrescriptionStatus = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { status } = req.body;

        if (!['verified', 'rejected'].includes(status)) {
            res.status(400).json({ message: 'Invalid status' });
            return;
        }

        const prescription = await Prescription.findById(req.params.id);

        if (!prescription) {
            res.status(404).json({ message: 'Prescription not found' });
            return;
        }

        prescription.status = status;
        prescription.verifiedBy = req.user?._id;

        const updatedPrescription = await prescription.save();
        res.json(updatedPrescription);

    } catch (error) {
        res.status(500).json({ message: 'Error updating prescription', error });
    }
};
