import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js'; 

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//resr object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//rest api
app.get("/", (req, res) => {
    res.send(
        "<h1>Welcome to the E-commerce</h1>"
    );
});

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.white);
});
