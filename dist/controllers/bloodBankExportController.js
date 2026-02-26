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
exports.exportRequestsToPDF = exports.exportDonorsToPDF = exports.exportRequestsToExcel = exports.exportDonorsToExcel = void 0;
const BloodDonor_1 = __importDefault(require("../models/BloodDonor"));
const BloodRequest_1 = __importDefault(require("../models/BloodRequest"));
const exceljs_1 = __importDefault(require("exceljs"));
// @desc    Export donors to Excel
// @route   GET /api/blood-bank/admin/export/donors/excel
// @access  Private/Admin
const exportDonorsToExcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donors = yield BloodDonor_1.default.find({}).sort({ createdAt: -1 }).populate('user', 'name email');
        // Create a new workbook and worksheet
        const workbook = new exceljs_1.default.Workbook();
        const worksheet = workbook.addWorksheet('Blood Donors');
        // Define columns
        worksheet.columns = [
            { header: 'Donor Name', key: 'name', width: 25 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Blood Group', key: 'bloodGroup', width: 15 },
            { header: 'Age', key: 'age', width: 10 },
            { header: 'Gender', key: 'gender', width: 12 },
            { header: 'Phone', key: 'phone', width: 20 },
            { header: 'City', key: 'city', width: 20 },
            { header: 'Area', key: 'area', width: 20 },
            { header: 'Available', key: 'isAvailable', width: 12 },
            { header: 'Last Donation', key: 'lastDonationDate', width: 20 },
            { header: 'Registered On', key: 'createdAt', width: 20 },
        ];
        // Style the header row
        worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
        worksheet.getRow(1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF0066CC' }
        };
        worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
        // Add data rows
        donors.forEach((donor) => {
            var _a;
            worksheet.addRow({
                name: donor.name,
                email: ((_a = donor.user) === null || _a === void 0 ? void 0 : _a.email) || 'N/A',
                bloodGroup: donor.bloodGroup,
                age: donor.age,
                gender: donor.gender,
                phone: donor.phone,
                city: donor.city,
                area: donor.area,
                isAvailable: donor.isAvailable ? 'Yes' : 'No',
                lastDonationDate: donor.lastDonationDate ? new Date(donor.lastDonationDate).toLocaleDateString() : 'Never',
                createdAt: new Date(donor.createdAt).toLocaleDateString(),
            });
        });
        // Add alternating row colors
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1 && rowNumber % 2 === 0) {
                row.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFF0F0F0' }
                };
            }
        });
        // Set response headers
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=blood-donors-${Date.now()}.xlsx`);
        // Write to response
        yield workbook.xlsx.write(res);
        res.end();
    }
    catch (error) {
        console.error('Excel Export Error:', error);
        res.status(500).json({ message: 'Failed to export donors to Excel', error });
    }
});
exports.exportDonorsToExcel = exportDonorsToExcel;
// @desc    Export blood requests to Excel
// @route   GET /api/blood-bank/admin/export/requests/excel
// @access  Private/Admin
const exportRequestsToExcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requests = yield BloodRequest_1.default.find({}).sort({ createdAt: -1 }).populate('user', 'name email');
        const workbook = new exceljs_1.default.Workbook();
        const worksheet = workbook.addWorksheet('Blood Requests');
        worksheet.columns = [
            { header: 'Patient Name', key: 'patientName', width: 25 },
            { header: 'Requested By', key: 'requestedBy', width: 25 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Blood Group', key: 'bloodGroup', width: 15 },
            { header: 'Units', key: 'units', width: 10 },
            { header: 'Age', key: 'age', width: 10 },
            { header: 'Hospital', key: 'hospitalAddress', width: 35 },
            { header: 'City', key: 'city', width: 20 },
            { header: 'Area', key: 'area', width: 20 },
            { header: 'Contact', key: 'contactNumber', width: 20 },
            { header: 'Status', key: 'status', width: 12 },
            { header: 'Urgent', key: 'isUrgent', width: 10 },
            { header: 'Requested On', key: 'createdAt', width: 20 },
        ];
        // Style header
        worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
        worksheet.getRow(1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFDC143C' }
        };
        worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
        // Add data
        requests.forEach((request) => {
            var _a, _b;
            worksheet.addRow({
                patientName: request.patientName,
                requestedBy: ((_a = request.user) === null || _a === void 0 ? void 0 : _a.name) || 'N/A',
                email: ((_b = request.user) === null || _b === void 0 ? void 0 : _b.email) || 'N/A',
                bloodGroup: request.bloodGroup,
                units: request.units,
                age: request.age,
                hospitalAddress: request.hospitalAddress,
                city: request.city,
                area: request.area,
                contactNumber: request.contactNumber,
                status: request.status,
                isUrgent: request.isUrgent ? 'YES' : 'No',
                createdAt: new Date(request.createdAt).toLocaleDateString(),
            });
        });
        // Alternating colors
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
                if (rowNumber % 2 === 0) {
                    row.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFFFF0F0' }
                    };
                }
                // Highlight urgent requests
                const isUrgent = row.getCell('isUrgent').value === 'YES';
                if (isUrgent) {
                    row.getCell('isUrgent').font = { bold: true, color: { argb: 'FFDC143C' } };
                }
            }
        });
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=blood-requests-${Date.now()}.xlsx`);
        yield workbook.xlsx.write(res);
        res.end();
    }
    catch (error) {
        console.error('Excel Export Error:', error);
        res.status(500).json({ message: 'Failed to export requests to Excel', error });
    }
});
exports.exportRequestsToExcel = exportRequestsToExcel;
// @desc    Export donors to PDF
// @route   GET /api/blood-bank/admin/export/donors/pdf
// @access  Private/Admin
const exportDonorsToPDF = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donors = yield BloodDonor_1.default.find({}).sort({ createdAt: -1 }).populate('user', 'name email');
        // We'll send data to frontend to generate PDF using jsPDF
        // This is because jsPDF works better in browser environment
        const donorData = donors.map((donor) => {
            var _a;
            return ({
                name: donor.name,
                email: ((_a = donor.user) === null || _a === void 0 ? void 0 : _a.email) || 'N/A',
                bloodGroup: donor.bloodGroup,
                age: donor.age,
                gender: donor.gender,
                phone: donor.phone,
                city: donor.city,
                area: donor.area,
                isAvailable: donor.isAvailable ? 'Yes' : 'No',
                lastDonationDate: donor.lastDonationDate ? new Date(donor.lastDonationDate).toLocaleDateString() : 'Never',
                createdAt: new Date(donor.createdAt).toLocaleDateString(),
            });
        });
        res.json({ donors: donorData });
    }
    catch (error) {
        console.error('PDF Export Error:', error);
        res.status(500).json({ message: 'Failed to export donors to PDF', error });
    }
});
exports.exportDonorsToPDF = exportDonorsToPDF;
// @desc    Export requests to PDF
// @route   GET /api/blood-bank/admin/export/requests/pdf
// @access  Private/Admin
const exportRequestsToPDF = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requests = yield BloodRequest_1.default.find({}).sort({ createdAt: -1 }).populate('user', 'name email');
        const requestData = requests.map((request) => {
            var _a, _b;
            return ({
                patientName: request.patientName,
                requestedBy: ((_a = request.user) === null || _a === void 0 ? void 0 : _a.name) || 'N/A',
                email: ((_b = request.user) === null || _b === void 0 ? void 0 : _b.email) || 'N/A',
                bloodGroup: request.bloodGroup,
                units: request.units,
                age: request.age,
                hospitalAddress: request.hospitalAddress,
                city: request.city,
                area: request.area,
                contactNumber: request.contactNumber,
                status: request.status,
                isUrgent: request.isUrgent ? 'YES' : 'No',
                createdAt: new Date(request.createdAt).toLocaleDateString(),
            });
        });
        res.json({ requests: requestData });
    }
    catch (error) {
        console.error('PDF Export Error:', error);
        res.status(500).json({ message: 'Failed to export requests to PDF', error });
    }
});
exports.exportRequestsToPDF = exportRequestsToPDF;
