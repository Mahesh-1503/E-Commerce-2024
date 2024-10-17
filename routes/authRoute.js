import express from 'express';
import { registerController, loginController, testController } from '../controllers/authController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Register route (POST)
router.post('/register', registerController);

// Login route (POST)
router.post('/login', loginController);

// Test route for protected routes (GET)
// This route is accessible only for authenticated users
router.get('/test', requireSignIn, testController);

// Admin route example (GET)
// This route is accessible only for authenticated users who are admins
router.get('/admin', requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ message: "Admin access granted" });
});

export default router;
