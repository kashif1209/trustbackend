import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { subscribers, Subscriber } from '../models/newsletter';

export const subscribe = (req: Request, res: Response): void => {
  try {
    const { email } = req.body;
    
    // Basic validation
    if (!email) {
      res.status(400).json({
        status: 'error',
        message: 'Email is required'
      });
      return;
    }
    
    // Check if already subscribed
    const existingSubscriber = subscribers.find(sub => sub.email === email && sub.active);
    if (existingSubscriber) {
      res.status(400).json({
        status: 'error',
        message: 'Email is already subscribed'
      });
      return;
    }
    
    const newSubscriber: Subscriber = {
      id: uuidv4(),
      email,
      subscribedAt: new Date(),
      active: true
    };
    
    subscribers.push(newSubscriber);
    
    res.status(201).json({
      status: 'success',
      data: newSubscriber
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to subscribe to newsletter'
    });
  }
};

export const getSubscribers = (req: Request, res: Response): void => {
  try {
    res.status(200).json({
      status: 'success',
      results: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch subscribers'
    });
  }
}; 