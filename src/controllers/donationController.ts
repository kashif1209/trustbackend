import { Request, Response } from 'express';
import * as donationModel from '../models/donation';

export const createDonation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, amount, paymentMethod, description } = req.body;
    
    // Basic validation
    if (!name || !email || !amount) {
      res.status(400).json({
        status: 'error',
        message: 'Name, email, and amount are required'
      });
      return;
    }
    
    const newDonation = await donationModel.createDonation({
      name,
      email,
      amount: Number(amount),
      paymentMethod: paymentMethod || 'card',
      description
    });
    
    res.status(201).json({
      status: 'success',
      data: newDonation
    });
  } catch (error) {
    console.error('Error creating donation:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to process donation'
    });
  }
};

export const getDonations = async (req: Request, res: Response): Promise<void> => {
  try {
    const donations = await donationModel.getDonations();
    
    res.status(200).json({
      status: 'success',
      results: donations.length,
      data: donations
    });
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch donations'
    });
  }
}; 