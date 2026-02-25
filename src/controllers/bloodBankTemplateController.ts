import { Request, Response } from 'express';
import ExcelJS from 'exceljs';

export const downloadDonorTemplate = async (req: Request, res: Response): Promise<void> => {
    try {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Donors');

        // Define columns
        worksheet.columns = [
            { header: 'Full Name', key: 'name', width: 25 },
            { header: 'Email', key: 'email', width: 25 },
            { header: 'Blood Group', key: 'bloodGroup', width: 15 },
            { header: 'Age', key: 'age', width: 10 },
            { header: 'Gender', key: 'gender', width: 12 },
            { header: 'Phone Number', key: 'phone', width: 15 },
            { header: 'City', key: 'city', width: 15 },
            { header: 'Area', key: 'area', width: 15 },
            { header: 'Full Address', key: 'address', width: 40 }
        ];

        // Add some sample data
        worksheet.addRow({
            name: 'John Doe',
            email: 'john@example.com',
            bloodGroup: 'O+',
            age: 25,
            gender: 'Male',
            phone: '9876543210',
            city: 'Mumbai',
            area: 'Andheri',
            address: '123, Blue Street, Mumbai'
        });

        // Add helpful comment note
        worksheet.addRow({});
        worksheet.addRow({ name: 'Note: Blood Group must be one of: A+, A-, B+, B-, AB+, AB-, O+, O-' });

        // Set response headers
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=blood_donor_template.xlsx');

        await workbook.xlsx.write(res);
        res.status(200).end();
    } catch (error) {
        console.error('Template generation error:', error);
        res.status(500).json({ message: 'Failed to generate template' });
    }
};
