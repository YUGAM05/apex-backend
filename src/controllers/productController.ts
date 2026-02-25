import { Request, Response } from 'express';
import Inventory from '../models/Inventory';

// @desc    Get all approved products for public view
// @route   GET /api/products?category=Medicine
// @access  Public
export const getPublicProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { category } = req.query;

        // Build filter for approved or pending products (for visibility during dev/testing)
        const filter: any = { status: { $in: ['approved', 'pending'] } };

        // Add category filter if provided
        if (category && typeof category === 'string') {
            filter.category = category;
        }

        const products = await Inventory.find(filter)
            .populate('seller', 'name')
            .sort({ createdAt: -1 });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

// @desc    Get deals of the day
// @route   GET /api/products/deals
// @access  Public
export const getDealProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const deals = await Inventory.find({
            status: { $in: ['approved', 'pending'] },
            isDealOfDay: true
        })
            .populate('seller', 'name')
            .limit(8)  // Max 8 deals
            .sort({ createdAt: -1 });

        res.json(deals);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching deals', error });
    }
};

// @desc    Get single product details
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Inventory.findById(req.params.id)
            .populate('seller', 'name shopName address'); // minimal seller info

        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }

        if (product.status !== 'approved' && product.status !== 'pending') {
            res.status(404).json({ message: 'Product not available' });
            return;
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

// @desc    Search products (Autocomplete)
// @route   GET /api/products/search?q=query
// @access  Public
export const searchProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { q } = req.query;
        if (!q || typeof q !== 'string') {
            res.json([]);
            return;
        }

        const products = await Inventory.find({
            status: 'approved',
            $or: [
                { name: { $regex: q, $options: 'i' } },
                { description: { $regex: q, $options: 'i' } },
                { category: { $regex: q, $options: 'i' } }
            ]
        })
            .select('name category sellingPrice imageUrl images')
            .limit(10);

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error searching products', error });
    }
};
