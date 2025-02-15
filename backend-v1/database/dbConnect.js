import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MY_MONGO_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDb connected");
  } catch (error) {
    console.error("Error connecting mongo", error);
    process.exit();
  }
};
export default connectDb;
