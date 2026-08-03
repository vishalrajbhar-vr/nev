import dotenv from "dotenv";

dotenv.config();

const requiredInProduction = ["MONGODB_URI", "SMTP_USER", "SMTP_PASSWORD", "MAIL_TO"];

if (process.env.NODE_ENV === "production") {
  const missing = requiredInProduction.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing production environment variables: ${missing.join(", ")}`);
  }
}

export const env = {
  port: Number(process.env.PORT || 5000),
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  mongoUri: process.env.MONGODB_URI?.trim() || null,
  mongoServerSelectionTimeoutMs: Number(process.env.MONGO_SERVER_SELECTION_TIMEOUT_MS || 10000),
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== "false",
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
  },
  mailFrom: process.env.MAIL_FROM || process.env.SMTP_USER,
  mailTo: process.env.MAIL_TO,
};
