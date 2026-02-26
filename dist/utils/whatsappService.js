"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWhatsAppMessage = void 0;
const twilio_1 = __importDefault(require("twilio"));
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;
const getTwilioClient = () => {
    if (!accountSid || !authToken)
        return null;
    return (0, twilio_1.default)(accountSid, authToken);
};
/**
 * Send a WhatsApp message using Twilio (Supports both plain body and templates/Content API)
 * @param to Phone number to send the message to (e.g., +919000000000)
 * @param content Message body OR template configuration
 */
const sendWhatsAppMessage = (to, content) => __awaiter(void 0, void 0, void 0, function* () {
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
        const messageOptions = {
            from: fromFormatted,
            to: toFormatted
        };
        if (typeof content === 'string') {
            messageOptions.body = content;
        }
        else {
            messageOptions.contentSid = content.contentSid;
            messageOptions.contentVariables = content.contentVariables;
        }
        const message = yield client.messages.create(messageOptions);
        console.log(`WhatsApp message sent: ${message.sid}`);
    }
    catch (error) {
        console.error('Error sending WhatsApp message:', error);
    }
});
exports.sendWhatsAppMessage = sendWhatsAppMessage;
