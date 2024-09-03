import mongoose from 'mongoose';

let isConnected;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log('=> Using existing database connection');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI)
    console.log(db,"Connection")
    isConnected = db.connections[0].readyState;
    console.log('=> New database connection established');
  } catch (error) {
    console.error('=> Database connection failed', error);
    throw error;
  }
};
