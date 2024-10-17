// controllers/authController.js
import userModel from '../models/userModel.js';
import { hashPassword, comparePassword } from '../helpers/authHelper.js';
import jwt from 'jsonwebtoken';

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Validations
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).send({ error: "All fields are required" });
    }

    // Check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Save user
    const user = new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });
    await user.save();

    res.status(201).send({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Error in registration", error });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validations
    if (!email || !password) {
      return res.status(400).send({ error: "Email and password are required" });
    }

    // Check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    // Compare passwords
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ error: "Invalid credentials" });
    }

    // Create token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: { _id: user._id, name: user.name, email: user.email, phone: user.phone, address: user.address },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Error in login", error });
  }
};

// Example protected route controller
export const testController = (req, res) => {
  res.send("Protected route accessed!");
};
