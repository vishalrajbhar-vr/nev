import cors from "cors";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import submissionRoutes from "./routes/submissionRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: env.clientUrl }));
app.use(express.json({ limit: "20kb" }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  })
);

app.get("/", (_req, res) => {
  res.json({
    name: "NEV API",
    status: "ok",
    health: "/api/health",
  });
});

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/submissions", submissionRoutes);
app.use(errorHandler);

export default app;
