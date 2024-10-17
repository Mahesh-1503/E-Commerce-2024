import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

// Load environment variables
dotenv.config();

// MongoDB connection
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(morgan("dev")); // Logging middleware

// Routes
app.use("/api/v1/auth", authRoute);

// Test route for welcome message
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the E-commerce</h1>");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Port configuration
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.white);
});
