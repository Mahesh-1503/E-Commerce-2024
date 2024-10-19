import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true, // Ensure email is stored in lowercase for consistency
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Restrict to 'user' or 'admin'
    default: 'user',        // Set 'user' as the default role
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt timestamps
});

// Create and export the user model
const userModel = mongoose.model('User', userSchema);

export default userModel;
