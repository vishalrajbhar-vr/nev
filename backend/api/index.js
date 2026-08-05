import app from "../src/app.js";
import { connectDatabase } from "../src/config/database.js";

let databaseConnection;

function ensureDatabaseConnection() {
  databaseConnection ??= connectDatabase().catch((error) => {
    databaseConnection = undefined;
    throw error;
  });

  return databaseConnection;
}

export default async function handler(req, res) {
  try {
    await ensureDatabaseConnection();
    return app(req, res);
  } catch (error) {
    console.error("[Serverless] Database connection failed:", error.message);
    return res.status(503).json({ message: "Service temporarily unavailable. Please try again." });
  }
}