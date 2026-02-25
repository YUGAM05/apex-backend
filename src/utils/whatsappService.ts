import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;

const getTwilioClient = () => {
    if (!accountSid || !authToken) return null;
    return twilio(accountSid, authToken);
};

/**
 * Send a WhatsApp message using Twilio (Supports both plain body and templates/Content API)
 * @param to Phone number to send the message to (e.g., +919000000000)
 * @param content Message body OR template configuration
 */
export const sendWhatsAppMessage = async (to: string, content: string | { contentSid: string, contentVariables: string }) => {
    try {
        if (!accountSid || !authToken || !whatsappNumber) {
            console.warn('Twilio credentials missing. Skipping WhatsApp message.');
            return;
        }

        const toFormatted = to.startsWith('whatsapp:') ? to : `whatsapp:${to}`;
        const fromFormatted = `whatsapp:${whatsappNumber}`;

        console.log(`[WhatsApp] Preparing to send to ${toFormatted} from ${fromFormatted}`);

        const client = getTwilioClient();
        if (!client) {
            console.error('[WhatsApp] Twilio client could not be initialized. Check SID/TOKEN in .env');
            return;
        }

        const messageOptions: any = {
            from: fromFormatted,
            to: toFormatted
        };

        if (typeof content === 'string') {
            messageOptions.body = content;
        } else {
            messageOptions.contentSid = content.contentSid;
            messageOptions.contentVariables = content.contentVariables;
        }

        const message = await client.messages.create(messageOptions);
        console.log(`WhatsApp message sent: ${message.sid}`);
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
    }
};
