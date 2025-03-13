import express from 'express';
import { createDonation, getDonations } from '../controllers/donationController';

const router = express.Router();

router.post('/', createDonation);
router.get('/', getDonations);

export default router; 