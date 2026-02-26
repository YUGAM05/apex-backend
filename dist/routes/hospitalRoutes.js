"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hospitalController_1 = require("../controllers/hospitalController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
router.get('/', hospitalController_1.getHospitals);
router.get('/:id', hospitalController_1.getHospitalById);
router.post('/seed', hospitalController_1.seedHospitals);
router.post('/', authMiddleware_1.protect, authMiddleware_1.adminOnly, hospitalController_1.createHospital);
router.put('/:id', authMiddleware_1.protect, authMiddleware_1.adminOnly, hospitalController_1.updateHospital);
router.delete('/:id', authMiddleware_1.protect, authMiddleware_1.adminOnly, hospitalController_1.deleteHospital);
// Upload images
const uploadDir = path_1.default.join(process.cwd(), 'uploads', 'hospitals');
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path_1.default.extname(file.originalname);
        cb(null, unique + ext);
    }
});
const upload = (0, multer_1.default)({ storage });
router.post('/upload-images', authMiddleware_1.protect, authMiddleware_1.adminOnly, upload.array('images', 10), hospitalController_1.uploadHospitalImages);
exports.default = router;
