import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Reuse the same connection across hot reloads in development.
let cachedConnection: typeof mongoose | null = null;

export async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is missing. Please add it to your environment variables.');
  }

  if (cachedConnection?.connection.readyState === 1) {
    return;
  }

  try {
    if (!cachedConnection) {
      cachedConnection = await mongoose.connect(MONGODB_URI);
    }

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
}