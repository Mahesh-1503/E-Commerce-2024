import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// Middleware to protect routes based on token verification
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    // Check if token is provided
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authorization token is required',
      });
    }

    // Verify the token and attach the decoded user data to the request
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token. Please login again.',
      error,
    });
  }
};

// Middleware to allow access only to admin users
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);

    // Check if user exists and has admin privileges
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    if (user.role !== 1) {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Admin resources only.',
      });
    }

    next();
  } catch (error) {
    console.error('Error in admin middleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while checking admin access',
      error,
    });
  }
};
