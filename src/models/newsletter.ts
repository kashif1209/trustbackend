export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: Date;
  active: boolean;
}

// In-memory storage for subscribers
export const subscribers: Subscriber[] = []; 