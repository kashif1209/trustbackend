import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { messages, ContactMessage } from '../models/contact';

export const sendMessage = (req: Request, res: Response): void => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      res.status(400).json({
        status: 'error',
        message: 'Name, email, and message are required'
      });
      return;
    }
    
    const newMessage: ContactMessage = {
      id: uuidv4(),
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date(),
      read: false
    };
    
    messages.push(newMessage);
    
    res.status(201).json({
      status: 'success',
      data: newMessage
    });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to send message'
    });
  }
};

export const getMessages = (req: Request, res: Response): void => {
  try {
    res.status(200).json({
      status: 'success',
      results: messages.length,
      data: messages
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch messages'
    });
  }
}; 