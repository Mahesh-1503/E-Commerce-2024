import mongoose from "mongoose";
import colors from "colors"; 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB".bgGreen.white);
    } catch (error) {
        console.log("Error connecting to MongoDB".bgRed.white);
    }
}

export default connectDB; 
