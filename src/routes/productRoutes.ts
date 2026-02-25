import express from 'express';
import { getPublicProducts, getProductById, getDealProducts, searchProducts } from '../controllers/productController';

const router = express.Router();

router.get('/', getPublicProducts);
router.get('/deals', getDealProducts);
router.get('/search', searchProducts);
router.get('/:id', getProductById);

export default router;
