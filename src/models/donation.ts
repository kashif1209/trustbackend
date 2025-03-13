import { v4 as uuidv4 } from 'uuid';

export interface Donation {
  id: string;
  name: string;
  email: string;
  amount: number;
  paymentMethod: string;
  description?: string;
  createdAt: Date;
}

// In-memory storage for donations
const donations: Donation[] = [];

export interface CreateDonationParams {
  name: string;
  email: string;
  amount: number;
  paymentMethod: string;
  description?: string;
}

export const createDonation = async (params: CreateDonationParams): Promise<Donation> => {
  const newDonation: Donation = {
    id: uuidv4(),
    ...params,
    createdAt: new Date()
  };
  
  donations.push(newDonation);
  return newDonation;
};

export const getDonations = async (): Promise<Donation[]> => {
  return donations;
}; 