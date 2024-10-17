// routes/authRoute.js
import express from 'express';
import { registerController, loginController, testController } from '../controllers/authController.js';

const router = express.Router();

// Register route
router.post('/register', registerController);

// Login route
router.post('/login', loginController);

// Test protected route
router.get('/test', testController);

export default router;
