import dotenv from 'dotenv';
import mongoose from 'mongoose';
import config from '../config';

dotenv.config();

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI ?? config.DATABASES.MONGO_URI;
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected... => ${MONGO_URI}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unexpected error occurred while connecting to database', err);
    }
    process.exit(1);
  }
};

export default connectDB;
