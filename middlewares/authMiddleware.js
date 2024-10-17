import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// Middleware to check if the user is authenticated
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Access denied. No token provided.",
      });
    }
    // Verify the token
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Save the decoded user info in the request object
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

// Middleware to check if the user is an admin
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(403).send({
        success: false,
        message: "Access denied. Admin resources only.",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in admin middleware",
      error,
    });
  }
};
