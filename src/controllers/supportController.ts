import { Request, Response } from 'express';
import SupportTicket from '../models/SupportTicket';

export const createTicket = async (req: any, res: Response) => {
    try {
        const { subject, message, type } = req.body;
        const userId = req.user._id;

        const ticket = new SupportTicket({
            userId,
            subject,
            message,
            type
        });

        await ticket.save();
        res.status(201).json({ message: "Support ticket created successfully", ticket });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllTickets = async (req: Request, res: Response) => {
    try {
        const tickets = await SupportTicket.find().populate('userId', 'name email phone').sort({ createdAt: -1 });
        res.status(200).json(tickets);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTicketStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status, adminNotes } = req.body;

        const ticket = await SupportTicket.findByIdAndUpdate(
            id,
            { status, adminNotes },
            { new: true }
        );

        if (!ticket) {
            return res.status(404).json({ message: "Ticket not found" });
        }

        res.status(200).json({ message: "Ticket updated successfully", ticket });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getMyTickets = async (req: any, res: Response) => {
    try {
        const userId = req.user._id;
        const tickets = await SupportTicket.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(tickets);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
