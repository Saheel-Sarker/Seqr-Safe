import express from 'express';
import { stripeWebhook } from '../controllers/stripe.controller.js';

const router = express.Router();
router.post("/stripe", stripeWebhook);

export default router;