import mongoose from "mongoose";
import { env } from "./env.js";

function redactMongoUri(uri) {
  try {
    const parsedUri = new URL(uri);
    if (parsedUri.password) parsedUri.password = "********";
    if (parsedUri.username) parsedUri.username = "********";
    return parsedUri.toString();
  } catch {
    return "configured MongoDB URI";
  }
}

export async function connectDatabase() {
  if (!env.mongoUri || env.mongoUri.includes("<username>")) {
    const message = "MONGODB_URI is missing or still contains template placeholders. Set it in backend/.env.";
    console.error(`[MongoDB] ${message}`);
    throw new Error(message);
  }

  console.log(`[MongoDB] Connecting to ${redactMongoUri(env.mongoUri)}`);

  mongoose.connection.on("error", (error) => {
    console.error(`[MongoDB] Connection error: ${error.message}`);
  });
  mongoose.connection.on("disconnected", () => {
    console.warn("[MongoDB] Disconnected");
  });

  try {
    await mongoose.connect(env.mongoUri, {
      serverSelectionTimeoutMS: env.mongoServerSelectionTimeoutMs,
      connectTimeoutMS: env.mongoServerSelectionTimeoutMs,
    });
    return mongoose.connection.host || "database";
  } catch (error) {
    console.error(`[MongoDB] Initial connection failed: ${error.message}`);
    throw error;
  }
}
