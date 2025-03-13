import express from 'express';
import contactRoutes from './contactRoutes';
import donationRoutes from './donationRoutes';
import eventRoutes from './eventRoutes';
import newsletterRoutes from './newsletterRoutes';

const router = express.Router();

// Mount routes
router.use('/contact', contactRoutes);
router.use('/donations', donationRoutes);
router.use('/events', eventRoutes);
router.use('/newsletter', newsletterRoutes);

export default router; 