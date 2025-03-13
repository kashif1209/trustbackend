import express, { Router } from 'express';
import { sendMessage, getMessages } from '../controllers/contactController';

const router: Router = express.Router();

router.post('/', sendMessage);
router.get('/', getMessages);

export default router; 