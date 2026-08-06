import app from "./app.js";
import os from "node:os";
import { connectDatabase } from "./config/database.js";
import { env } from "./config/env.js";

function getNetworkAddress() {
  const interfaces = Object.values(os.networkInterfaces()).flat();
  const networkInterface = interfaces.find(
    (address) =>
      (address?.family === "IPv4" || address?.family === 4) && !address.internal
  );
  return networkInterface?.address || "localhost";
}

async function startServer() {
  try {
    const mongoHost = await connectDatabase();
    const server = app.listen(env.port, "0.0.0.0", () => {
      const emailReady = Boolean(
        env.smtp.host && env.smtp.user && env.smtp.password && env.mailTo
      );
      console.log("");
      console.log(`🚀 Server is running on port ${env.port}`);
      console.log(`   → Local:    http://localhost:${env.port}`);
      console.log(`   → Network:  http://${getNetworkAddress()}:${env.port}`);
      console.log("");
      console.log(`✅ MongoDB Connected: ${mongoHost}`);
      console.log(
        emailReady
          ? `✉️ Email notifications: enabled → ${env.mailTo}`
          : "⚠️ Email notifications: disabled → add SMTP_PASSWORD to backend/.env"
      );
    });

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        console.error(`[Server] Port ${env.port} is already in use.`);
        console.error(`[Server] Stop the existing process or change PORT in backend/.env.`);
      } else {
        console.error(`[Server] Listen failed: ${error.message}`);
      }
      process.exit(1);
    });
  } catch (error) {
    console.error(`[Server] Startup failed: ${error.message}`);
    console.error("[Server] Check MONGODB_URI, network access, and MongoDB credentials in backend/.env");
    process.exit(1);
  }
}

startServer();
