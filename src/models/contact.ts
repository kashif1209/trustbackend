export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  read: boolean;
}

// In-memory storage for messages
export const messages: ContactMessage[] = []; 