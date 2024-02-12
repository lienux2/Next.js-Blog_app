import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB sucessfully");
  } catch (error) {
    console.error("Error connecting to DB", error);
    throw error;
  }
};

export { connectMongoDB };
