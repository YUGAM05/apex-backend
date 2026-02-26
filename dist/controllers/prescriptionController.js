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
exports.updatePrescriptionStatus = exports.getAllPrescriptions = exports.getMyPrescriptions = exports.uploadPrescription = void 0;
const Prescription_1 = __importDefault(require("../models/Prescription"));
// @desc    Upload a new prescription
// @route   POST /api/prescriptions
// @access  Private (User)
const uploadPrescription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { imageUrl, notes } = req.body;
        if (!imageUrl) {
            res.status(400).json({ message: 'Image URL is required' });
            return;
        }
        const prescription = yield Prescription_1.default.create({
            user: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id,
            imageUrl,
            notes,
            status: 'pending'
        });
        res.status(201).json(prescription);
    }
    catch (error) {
        res.status(500).json({ message: 'Error uploading prescription', error });
    }
});
exports.uploadPrescription = uploadPrescription;
// @desc    Get logged in user's prescriptions
// @route   GET /api/prescriptions/my
// @access  Private (User)
const getMyPrescriptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const prescriptions = yield Prescription_1.default.find({ user: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id }).sort({ createdAt: -1 });
        res.json(prescriptions);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching prescriptions', error });
    }
});
exports.getMyPrescriptions = getMyPrescriptions;
// @desc    Get all prescriptions (Admin)
// @route   GET /api/prescriptions/admin
// @access  Private (Admin)
const getAllPrescriptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Can filter by status via query query params if needed
        const status = req.query.status;
        const query = status ? { status } : {};
        const prescriptions = yield Prescription_1.default.find(query)
            .populate('user', 'name email')
            .sort({ createdAt: -1 });
        res.json(prescriptions);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching prescriptions', error });
    }
});
exports.getAllPrescriptions = getAllPrescriptions;
// @desc    Update prescription status (Admin)
// @route   PUT /api/prescriptions/:id/status
// @access  Private (Admin)
const updatePrescriptionStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { status } = req.body;
        if (!['verified', 'rejected'].includes(status)) {
            res.status(400).json({ message: 'Invalid status' });
            return;
        }
        const prescription = yield Prescription_1.default.findById(req.params.id);
        if (!prescription) {
            res.status(404).json({ message: 'Prescription not found' });
            return;
        }
        prescription.status = status;
        prescription.verifiedBy = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
        const updatedPrescription = yield prescription.save();
        res.json(updatedPrescription);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating prescription', error });
    }
});
exports.updatePrescriptionStatus = updatePrescriptionStatus;
