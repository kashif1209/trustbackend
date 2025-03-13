import express from 'express';
import { subscribe, getSubscribers } from '../controllers/newsletterController';

const router = express.Router();

router.post('/subscribe', subscribe);
router.get('/', getSubscribers);

export default router; 