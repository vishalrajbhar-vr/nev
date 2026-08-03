import { Router } from "express";
import { createSubmission } from "../controllers/submissionController.js";

const router = Router();

router.post("/", createSubmission);

export default router;
