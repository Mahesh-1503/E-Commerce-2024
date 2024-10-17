const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

//dotenv config
dotenv.config();

//resr object
const app = express();

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
