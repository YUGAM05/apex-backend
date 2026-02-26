import axios from 'axios';
import crypto from 'crypto';

const PHONEPE_HOST = process.env.PHONEPE_HOST_URL || 'https://api-preprod.phonepe.com/apis/pg-sandbox';
const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID || '';
const SALT_KEY = process.env.PHONEPE_SALT_KEY || '';
const SALT_INDEX = process.env.PHONEPE_SALT_INDEX || '1';
const REDIRECT_URL = process.env.PHONEPE_REDIRECT_URL || 'http://localhost:3000/payment/success';
const CALLBACK_URL = process.env.PHONEPE_CALLBACK_URL || 'http://localhost:5000/api/payment/phonepe/callback';

const phonepeService = {

    /**
     * Initiate a PhonePe payment
     */
    initiatePayment: async (
        transactionId: string,
        amount: number,
        userId: string,
        phone: string
    ) => {
        try {
            // PhonePe expects amount in paise (multiply by 100)
            const amountInPaise = Math.round(amount * 100);

            const payload = {
                merchantId: MERCHANT_ID,
                merchantTransactionId: transactionId,
                merchantUserId: `MU${userId}`,
                amount: amountInPaise,
                redirectUrl: `${REDIRECT_URL}?transactionId=${transactionId}`,
                redirectMode: 'POST',
                callbackUrl: CALLBACK_URL,
                mobileNumber: phone,
                paymentInstrument: {
                    type: 'PAY_PAGE'
                }
            };

            // Base64 encode the payload
            const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');

            // Generate checksum: SHA256(base64Payload + "/pg/v1/pay" + saltKey) + ### + saltIndex
            const checksumString = base64Payload + '/pg/v1/pay' + SALT_KEY;
            const sha256 = crypto.createHash('sha256').update(checksumString).digest('hex');
            const checksum = `${sha256}###${SALT_INDEX}`;

            const response = await axios.post(
                `${PHONEPE_HOST}/pg/v1/pay`,
                { request: base64Payload },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-VERIFY': checksum
                    }
                }
            );

            return response.data;
        } catch (error: any) {
            console.error('PhonePe initiatePayment Error:', error.response?.data || error.message);
            return { success: false, message: error.response?.data?.message || error.message };
        }
    },

    /**
     * Verify callback checksum from PhonePe webhook
     */
    verifyCallback: (responseBase64: string, xVerify: string): boolean => {
        try {
            const checksumString = responseBase64 + SALT_KEY;
            const sha256 = crypto.createHash('sha256').update(checksumString).digest('hex');
            const expectedChecksum = `${sha256}###${SALT_INDEX}`;
            return expectedChecksum === xVerify;
        } catch (error) {
            console.error('PhonePe verifyCallback Error:', error);
            return false;
        }
    },

    /**
     * Check payment status for a transaction
     */
    checkStatus: async (merchantTransactionId: string) => {
        try {
            const path = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`;
            const checksumString = path + SALT_KEY;
            const sha256 = crypto.createHash('sha256').update(checksumString).digest('hex');
            const checksum = `${sha256}###${SALT_INDEX}`;

            const response = await axios.get(
                `${PHONEPE_HOST}${path}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-VERIFY': checksum,
                        'X-MERCHANT-ID': MERCHANT_ID
                    }
                }
            );

            return response.data;
        } catch (error: any) {
            console.error('PhonePe checkStatus Error:', error.response?.data || error.message);
            return { success: false, message: error.response?.data?.message || error.message };
        }
    }
};

export default phonepeService;