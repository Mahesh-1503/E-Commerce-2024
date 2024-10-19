import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`.bgCyan.white);
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`.red);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
