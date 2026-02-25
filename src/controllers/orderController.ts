import { Response } from 'express';
import Order from '../models/Order';
import Inventory from '../models/Inventory';
import Coupon from '../models/Coupon';
import { AuthRequest } from '../middleware/authMiddleware';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private (user must be logged in)
export const createOrder = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { items, shippingAddress, totalAmount, paymentMethod, notes, shippingLocation, couponCode, discountAmount } = req.body;

        // Validate required fields
        if (!items || !shippingAddress || !totalAmount) {
            res.status(400).json({ message: 'Missing required fields' });
            return;
        }

        // Verify user is authenticated
        if (!req.user) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        // Check stock availability for all items
        for (const item of items) {
            const product = await Inventory.findById(item.productId);
            if (!product) {
                res.status(404).json({ message: `Product ${item.name} not found` });
                return;
            }
            if (product.stock < item.quantity) {
                res.status(400).json({ message: `Only ${product.stock} left in stock for ${item.name}` });
                return;
            }
        }

        // Calculate breakdown
        const medicineSubtotal = items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
        const platformFee = 10;
        const sellerCommission = Math.round(medicineSubtotal * 0.15);
        let calculatedTotal = medicineSubtotal + platformFee;

        // Apply coupon if present
        let finalDiscountAmount = 0;
        if (couponCode) {
            const coupon = await Coupon.findOne({ code: couponCode.toUpperCase(), isActive: true });
            if (coupon && new Date() <= coupon.expiryDate && medicineSubtotal >= coupon.minOrderAmount) {
                if (coupon.discountType === 'percentage') {
                    finalDiscountAmount = (medicineSubtotal * coupon.discountValue) / 100;
                } else {
                    finalDiscountAmount = coupon.discountValue;
                }
                finalDiscountAmount = Math.min(finalDiscountAmount, medicineSubtotal);
                calculatedTotal -= finalDiscountAmount;

                // Increment usage count
                await Coupon.findByIdAndUpdate(coupon._id, { $inc: { usageCount: 1 } });
            }
        }

        // Create order
        const order = await Order.create({
            user: req.user._id,
            items: items.map((item: any) => ({
                product: item.productId,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.image
            })),
            shippingAddress,
            shippingLocation,
            medicineSubtotal,
            platformFee,
            sellerCommission,
            totalAmount: calculatedTotal,
            paymentMethod: paymentMethod || 'cod',
            paymentStatus: 'pending',
            orderStatus: 'pending',
            notes,
            couponCode: couponCode ? couponCode.toUpperCase() : undefined,
            discountAmount: finalDiscountAmount
        });

        // Update stock for each product
        for (const item of items) {
            await Inventory.findByIdAndUpdate(
                item.productId,
                { $inc: { stock: -item.quantity } }
            );
        }

        // 🚀 AUTOMATION: Send WhatsApp Bill
        try {
            const { sendWhatsAppBill } = await import('../services/whatsappService');
            if (shippingAddress && shippingAddress.phone) {
                const customerName = req.user.name || shippingAddress.fullName;
                
                // Use Environment Variable for the Frontend URL instead of localhost
                const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

                sendWhatsAppBill(
                    shippingAddress.phone,
                    customerName,
                    order._id.toString().slice(-8).toUpperCase(),
                    calculatedTotal, // Use the calculated total for the bill
                    `${frontendUrl}/order-success/${order._id}`
                ).catch((err: any) => console.error('WhatsApp Automation Failed:', err));
            }
        } catch (waError) {
            console.error('Failed to init WhatsApp service:', waError);
        }

        res.status(201).json(order);
    } catch (error: any) {
        console.error('Order creation error:', {
            message: error.message,
            stack: error.stack,
            body: req.body
        });
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

// @desc    Get user's orders
export const getUserOrders = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        const orders = await Order.find({ user: req.user._id })
            .sort({ createdAt: -1 })
            .populate('items.product', 'name category');

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};

// @desc    Get single order by ID
export const getOrderById = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const order = await Order.findById(req.params.id)
            .populate({
                path: 'items.product',
                select: 'name category seller',
                populate: {
                    path: 'seller',
                    select: 'name phone location'
                }
            })
            .populate('user', 'name email location')
            .populate('assignedDelivery', 'name phone location');

        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }

        if (!req.user || order.user._id.toString() !== req.user._id.toString()) {
            res.status(403).json({ message: 'Not authorized to view this order' });
            return;
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order', error });
    }
};

// @desc    Update order status
export const updateOrderStatus = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const order = await Order.findByIdAndUpdate(id, { orderStatus: status }, { new: true });

        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error });
    }
};