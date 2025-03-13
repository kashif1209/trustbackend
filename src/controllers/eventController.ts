import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { registrations, EventRegistration, events } from '../models/event';

export const registerForEvent = (req: Request, res: Response): void => {
  try {
    const { name, email, phone, eventId } = req.body;
    
    // Basic validation
    if (!name || !email || !eventId) {
      res.status(400).json({
        status: 'error',
        message: 'Name, email, and eventId are required'
      });
      return;
    }
    
    // Check if event exists
    const eventExists = events.some(event => event.id === eventId);
    if (!eventExists) {
      res.status(404).json({
        status: 'error',
        message: 'Event not found'
      });
      return;
    }
    
    const newRegistration: EventRegistration = {
      id: uuidv4(),
      name,
      email,
      phone,
      eventId,
      registeredAt: new Date()
    };
    
    registrations.push(newRegistration);
    
    res.status(201).json({
      status: 'success',
      data: newRegistration
    });
  } catch (error) {
    console.error('Error registering for event:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to register for event'
    });
  }
};

export const getEventRegistrations = (req: Request, res: Response): void => {
  try {
    const { eventId } = req.query;
    
    let result = registrations;
    
    if (eventId) {
      result = registrations.filter(reg => reg.eventId === eventId);
    }
    
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: result
    });
  } catch (error) {
    console.error('Error fetching event registrations:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch event registrations'
    });
  }
};

export const getEvents = (req: Request, res: Response): void => {
  try {
    res.status(200).json({
      status: 'success',
      results: events.length,
      data: events
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch events'
    });
  }
}; 