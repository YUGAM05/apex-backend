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
exports.getDonorStats = exports.importDonorsFromExcel = void 0;
const BloodDonor_1 = __importDefault(require("../models/BloodDonor"));
const exceljs_1 = __importDefault(require("exceljs"));
// @desc    Import donors from Excel file
// @route   POST /api/blood-bank/admin/import/donors
// @access  Private/Admin
const importDonorsFromExcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            res.status(400).json({ message: 'No file uploaded' });
            return;
        }
        const workbook = new exceljs_1.default.Workbook();
        yield workbook.xlsx.load(req.file.buffer);
        const worksheet = workbook.worksheets[0];
        const donors = [];
        const errors = [];
        // Skip header row (row 1) and process data rows
        worksheet.eachRow((row, rowNumber) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (rowNumber === 1)
                return; // Skip header
            try {
                const rowData = row.values;
                // Expected columns: Name, Email, Blood Group, Age, Gender, Phone, City, Area, Address
                // Adjust indices based on your Excel structure (1-indexed because row.values includes undefined at index 0)
                const donor = {
                    name: (_a = rowData[1]) === null || _a === void 0 ? void 0 : _a.toString().trim(),
                    email: (_b = rowData[2]) === null || _b === void 0 ? void 0 : _b.toString().trim(),
                    bloodGroup: (_c = rowData[3]) === null || _c === void 0 ? void 0 : _c.toString().trim(),
                    age: parseInt((_d = rowData[4]) === null || _d === void 0 ? void 0 : _d.toString()),
                    gender: (_e = rowData[5]) === null || _e === void 0 ? void 0 : _e.toString().trim(),
                    phone: (_f = rowData[6]) === null || _f === void 0 ? void 0 : _f.toString().trim(),
                    city: (_g = rowData[7]) === null || _g === void 0 ? void 0 : _g.toString().trim(),
                    area: (_h = rowData[8]) === null || _h === void 0 ? void 0 : _h.toString().trim(),
                    address: (_j = rowData[9]) === null || _j === void 0 ? void 0 : _j.toString().trim(),
                    source: 'google_form', // Mark as imported from Google Form
                    isAvailable: true,
                    location: {
                        type: 'Point',
                        coordinates: [0, 0] // Default coordinates
                    }
                };
                // Validate required fields
                if (!donor.name || !donor.bloodGroup || !donor.age || !donor.phone) {
                    errors.push(`Row ${rowNumber}: Missing required fields`);
                    return;
                }
                // Validate age
                if (isNaN(donor.age) || donor.age < 18 || donor.age > 60) {
                    errors.push(`Row ${rowNumber}: Invalid age (must be 18-60)`);
                    return;
                }
                // Validate blood group
                const validBloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
                if (!validBloodGroups.includes(donor.bloodGroup)) {
                    errors.push(`Row ${rowNumber}: Invalid blood group`);
                    return;
                }
                donors.push(donor);
            }
            catch (error) {
                errors.push(`Row ${rowNumber}: Error processing row - ${error}`);
            }
        });
        // Insert donors into database
        let successCount = 0;
        let duplicateCount = 0;
        const insertErrors = [];
        for (const donor of donors) {
            try {
                // Check for duplicates by phone number
                const existing = yield BloodDonor_1.default.findOne({ phone: donor.phone });
                if (existing) {
                    duplicateCount++;
                    continue;
                }
                yield BloodDonor_1.default.create(donor);
                successCount++;
            }
            catch (error) {
                insertErrors.push(`Failed to insert ${donor.name}: ${error.message}`);
            }
        }
        res.json({
            success: true,
            message: 'Import completed',
            stats: {
                totalRows: donors.length,
                successfulImports: successCount,
                duplicates: duplicateCount,
                errors: errors.length + insertErrors.length
            },
            errors: [...errors, ...insertErrors]
        });
    }
    catch (error) {
        console.error('Import error:', error);
        res.status(500).json({ message: 'Failed to import donors', error: error.message });
    }
});
exports.importDonorsFromExcel = importDonorsFromExcel;
// @desc    Get donor statistics by source
// @route   GET /api/blood-bank/admin/donors/stats
// @access  Private/Admin
const getDonorStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalDonors = yield BloodDonor_1.default.countDocuments();
        const googleFormDonors = yield BloodDonor_1.default.countDocuments({ source: 'google_form' });
        const userPanelDonors = yield BloodDonor_1.default.countDocuments({
            $or: [{ source: 'user_panel' }, { source: { $exists: false } }]
        });
        const availableDonors = yield BloodDonor_1.default.countDocuments({ isAvailable: true });
        // Blood group distribution
        const bloodGroupStats = yield BloodDonor_1.default.aggregate([
            {
                $group: {
                    _id: '$bloodGroup',
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);
        res.json({
            total: totalDonors,
            googleForm: googleFormDonors,
            userPanel: userPanelDonors,
            available: availableDonors,
            bloodGroups: bloodGroupStats
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch stats', error });
    }
});
exports.getDonorStats = getDonorStats;
