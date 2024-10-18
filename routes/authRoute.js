import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Register a new user
router.post("/register", registerController);

// Login a user
router.post("/login", loginController);

// Test protected route (example)
router.get("/test", requireSignIn, testController);

// Admin route example - accessible only by admin users
router.get("/admin-dashboard", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    success: true,
    message: "Welcome to the admin dashboard",
  });
});

export default router;
