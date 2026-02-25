import { Request, Response } from 'express';
import phonepeService from '../services/phonepeService';
import Order from '../models/Order';

/**
 * @desc    Initiate PhonePe Payment
 * @route   POST /api/payment/phonepe/initiate
 * @access  Private
 */
export const initiatePhonePePayment = async (req: Request, res: Response) => {
    try {
        const { orderId } = req.body;

        if (!orderId) {
            return res.status(400).json({ message: 'Order ID is required' });
        }

        const order = await Order.findById(orderId).populate('user', 'name phone');

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        const transactionId = `MT${Date.now()}${Math.floor(Math.random() * 1000)}`;

        // Update order with transaction ID
        order.paymentOrderId = transactionId;
        await order.save();

        const paymentResponse = await phonepeService.initiatePayment(
            transactionId,
            order.totalAmount,
            order.user._id.toString(),
            order.shippingAddress.phone
        );

        if (paymentResponse.success) {
            const redirectUrl = paymentResponse.data.instrumentResponse.redirectInfo.url;
            res.status(200).json({ success: true, redirectUrl, transactionId });
        } else {
            res.status(400).json({ success: false, message: paymentResponse.message });
        }
    } catch (error: any) {
        console.error('Initiate Payment Controller Error:', {
            message: error.message,
            stack: error.stack,
            response: error.response?.data
        });
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

/**
 * @desc    PhonePe Payment Callback (Webhook)
 * @route   POST /api/payment/phonepe/callback
 * @access  Public
 */
export const phonePeCallback = async (req: Request, res: Response) => {
    try {
        const { response } = req.body;
        const xVerify = req.headers['x-verify'] as string;

        // 1. Verify Checksum
        const isValid = phonepeService.verifyCallback(response, xVerify);
        if (!isValid) {
            console.error('Invalid Callback Checksum');
            return res.status(400).send('Invalid Checksum');
        }

        // 2. Decode Response
        const decodedResponse = JSON.parse(Buffer.from(response, 'base64').toString('utf-8'));
        console.log('PhonePe Callback Decoded:', decodedResponse);

        const { success, code, data } = decodedResponse;
        const { merchantTransactionId, state } = data;

        // 3. Update Order based on status
        const order = await Order.findOne({ paymentOrderId: merchantTransactionId });

        if (!order) {
            console.error(`Order not found for transaction: ${merchantTransactionId}`);
            return res.status(404).send('Order Not Found');
        }

        if (success && code === 'PAYMENT_SUCCESS') {
            order.paymentStatus = 'paid';
            order.orderStatus = 'confirmed'; // Auto-confirm on payment
            await order.save();
            console.log(`Payment Success for ${merchantTransactionId}, Order: ${order._id}`);
        } else {
            order.paymentStatus = 'failed';
            await order.save();
            console.log(`Payment Failed for ${merchantTransactionId}: ${state}`);
        }

        res.status(200).send('OK');
    } catch (error: any) {
        console.error('Callback Controller Error:', error);
        res.status(500).send('Internal Error');
    }
};

/**
 * @desc    Check PhonePe Payment Status
 * @route   GET /api/payment/phonepe/status/:merchantTransactionId
 * @access  Private
 */
export const checkPaymentStatus = async (req: Request, res: Response) => {
    try {
        const { merchantTransactionId } = req.params;
        const statusResponse = await phonepeService.checkStatus(merchantTransactionId);

        if (statusResponse.success && statusResponse.code === 'PAYMENT_SUCCESS') {
            res.status(200).json({ success: true, status: 'paid', data: statusResponse.data });
        } else {
            res.status(200).json({ success: false, status: 'failed', data: statusResponse.data });
        }
    } catch (error: any) {
        console.error('Check Status Controller Error:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
