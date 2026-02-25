import express from 'express';
import { createTicket, getAllTickets, updateTicketStatus, getMyTickets } from '../controllers/supportController';
import { protect, adminOnly } from '../middleware/authMiddleware';

const router = express.Router();

// User routes
router.post('/', protect, createTicket);
router.get('/my-tickets', protect, getMyTickets);

// Admin routes
router.get('/admin/all', protect, adminOnly, getAllTickets);
router.patch('/admin/:id', protect, adminOnly, updateTicketStatus);

export default router;
