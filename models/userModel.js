import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Restrict to 'user' or 'admin'
    default: 'user',        // Set 'user' as the default role
  },
}, {
  timestamps: true,
});

// Create the user model
const userModel = mongoose.model('User', userSchema);

export default userModel;
