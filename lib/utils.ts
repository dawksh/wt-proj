import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import mongoose, { Mongoose } from 'mongoose';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

async function dbConnect() {
  try {
    if (connection.isConnected && mongoose.connection.readyState >= 1) {
      return;
    }

    return await mongoose.connect(process.env.MONGODB_URL!).then((db: Mongoose) => {
      connection.isConnected = db.connections[0].readyState;
      console.log("Successfully connected to the database");
    });
  } catch (error) {
    console.error("An error occurred while connecting to the database:", error);
  }
}

export default dbConnect;