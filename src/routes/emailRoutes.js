import { Router } from 'express';
import { sendEmail } from '../config/emailController.js';

const router = Router();

router.post('/submit', sendEmail);

export default router;