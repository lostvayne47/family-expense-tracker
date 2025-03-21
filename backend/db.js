import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // Load environment variables
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to mongo successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default connectToMongo;
