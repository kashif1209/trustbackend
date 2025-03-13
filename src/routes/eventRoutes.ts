import express from 'express';
import { registerForEvent, getEventRegistrations, getEvents } from '../controllers/eventController';

const router = express.Router();

router.post('/register', registerForEvent);
router.get('/registrations', getEventRegistrations);
router.get('/', getEvents);

export default router; 