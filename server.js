import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js'; 
import authRoute from './routes/authRoute.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// API routes
app.use('/api/v1/auth', authRoute);

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the E-commerce API</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.white);
});
