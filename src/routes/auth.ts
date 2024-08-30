// src/routes/auth.ts

import { Router } from 'express';
import { registerUser, loginUser, getCurrentUser } from '../controllers/authController';
import authMiddleware from '../middleware/authMiddleware';

const router: Router = Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route to get the current user's profile (protected route)
router.get('/me', authMiddleware, getCurrentUser);

export default router;
