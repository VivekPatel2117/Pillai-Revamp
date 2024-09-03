import mongoose from 'mongoose';

let isConnected;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log('=> Using existing database connection');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    isConnected = db.connections[0].readyState;

    // Log the database name
    const dbName = db.connections[0].name;
    console.log(`=> Connected to database: ${dbName}`);

    // List available collections
    const collections = await db.connection.db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    console.log('=> Available collections:', collectionNames);

    console.log('=> New database connection established');
  } catch (error) {
    console.error('=> Database connection failed', error);
    throw error;
  }
};
