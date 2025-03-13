export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  capacity: number;
  registrationOpen: boolean;
}

export interface EventRegistration {
  id: string;
  name: string;
  email: string;
  phone?: string;
  eventId: string;
  registeredAt: Date;
}

// Sample events data
export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Charity Gala',
    description: 'Join us for our annual charity gala to raise funds for local community projects.',
    date: new Date('2025-06-15T18:00:00'),
    location: 'Grand Hotel, London',
    capacity: 200,
    registrationOpen: true
  },
  {
    id: '2',
    title: 'Community Cleanup Day',
    description: 'Help us clean up the local park and make our community a better place.',
    date: new Date('2025-04-22T09:00:00'),
    location: 'Central Park',
    capacity: 50,
    registrationOpen: true
  }
];

// In-memory storage for event registrations
export const registrations: EventRegistration[] = []; 