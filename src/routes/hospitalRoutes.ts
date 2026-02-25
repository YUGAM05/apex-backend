import express from 'express';
import { getHospitals, getHospitalById, seedHospitals, createHospital, updateHospital, deleteHospital, uploadHospitalImages, searchHospitals } from '../controllers/hospitalController';
import { protect, adminOnly } from '../middleware/authMiddleware';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', getHospitals);
router.get('/search', searchHospitals);
router.get('/:id', getHospitalById);
router.post('/seed', seedHospitals);
router.post('/', protect, adminOnly, createHospital);
router.put('/:id', protect, adminOnly, updateHospital);
router.delete('/:id', protect, adminOnly, deleteHospital);
// Upload images
const uploadDir = path.join(process.cwd(), 'uploads', 'hospitals');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, unique + ext);
    }
});
const upload = multer({ storage });
router.post('/upload-images', protect, adminOnly, upload.array('images', 10), uploadHospitalImages);

export default router;
