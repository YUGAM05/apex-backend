import { Request, Response } from 'express';
import BloodDonor from '../models/BloodDonor';
import BloodRequest from '../models/BloodRequest';
import ExcelJS from 'exceljs';

// @desc    Export donors to Excel
// @route   GET /api/blood-bank/admin/export/donors/excel
// @access  Private/Admin
export const exportDonorsToExcel = async (req: Request, res: Response): Promise<void> => {
    try {
        const donors = await BloodDonor.find({}).sort({ createdAt: -1 }).populate('user', 'name email');

        // Create a new workbook and worksheet
        const workbook = new ExcelJS.Workbook();
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
        donors.forEach((donor: any) => {
            worksheet.addRow({
                name: donor.name,
                email: donor.user?.email || 'N/A',
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
        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        console.error('Excel Export Error:', error);
        res.status(500).json({ message: 'Failed to export donors to Excel', error });
    }
};

// @desc    Export blood requests to Excel
// @route   GET /api/blood-bank/admin/export/requests/excel
// @access  Private/Admin
export const exportRequestsToExcel = async (req: Request, res: Response): Promise<void> => {
    try {
        const requests = await BloodRequest.find({}).sort({ createdAt: -1 }).populate('user', 'name email');

        const workbook = new ExcelJS.Workbook();
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
        requests.forEach((request: any) => {
            worksheet.addRow({
                patientName: request.patientName,
                requestedBy: request.user?.name || 'N/A',
                email: request.user?.email || 'N/A',
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

        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        console.error('Excel Export Error:', error);
        res.status(500).json({ message: 'Failed to export requests to Excel', error });
    }
};

// @desc    Export donors to PDF
// @route   GET /api/blood-bank/admin/export/donors/pdf
// @access  Private/Admin
export const exportDonorsToPDF = async (req: Request, res: Response): Promise<void> => {
    try {
        const donors = await BloodDonor.find({}).sort({ createdAt: -1 }).populate('user', 'name email');

        // We'll send data to frontend to generate PDF using jsPDF
        // This is because jsPDF works better in browser environment
        const donorData = donors.map((donor: any) => ({
            name: donor.name,
            email: donor.user?.email || 'N/A',
            bloodGroup: donor.bloodGroup,
            age: donor.age,
            gender: donor.gender,
            phone: donor.phone,
            city: donor.city,
            area: donor.area,
            isAvailable: donor.isAvailable ? 'Yes' : 'No',
            lastDonationDate: donor.lastDonationDate ? new Date(donor.lastDonationDate).toLocaleDateString() : 'Never',
            createdAt: new Date(donor.createdAt).toLocaleDateString(),
        }));

        res.json({ donors: donorData });
    } catch (error) {
        console.error('PDF Export Error:', error);
        res.status(500).json({ message: 'Failed to export donors to PDF', error });
    }
};

// @desc    Export requests to PDF
// @route   GET /api/blood-bank/admin/export/requests/pdf
// @access  Private/Admin
export const exportRequestsToPDF = async (req: Request, res: Response): Promise<void> => {
    try {
        const requests = await BloodRequest.find({}).sort({ createdAt: -1 }).populate('user', 'name email');

        const requestData = requests.map((request: any) => ({
            patientName: request.patientName,
            requestedBy: request.user?.name || 'N/A',
            email: request.user?.email || 'N/A',
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
        }));

        res.json({ requests: requestData });
    } catch (error) {
        console.error('PDF Export Error:', error);
        res.status(500).json({ message: 'Failed to export requests to PDF', error });
    }
};
