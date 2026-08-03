import { Submission } from "../models/Submission.js";
import { sendSubmissionEmail } from "../services/emailService.js";

const allowedTypes = new Set(["contact", "callback", "product", "dealership"]);

export async function createSubmission(req, res, next) {
  try {
    const { type = "contact", ...data } = req.body;
    const normalizedType = allowedTypes.has(type) ? type : "contact";
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Name, email, and phone are required" });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: "Please provide a valid email address" });
    }

    const submission = await Submission.create({
      type: normalizedType,
      data: { ...data, name, email, phone },
    });

    let emailSent = false;
    try {
      emailSent = await sendSubmissionEmail(normalizedType, submission.data);
      submission.emailSent = emailSent;
      await submission.save();
    } catch (error) {
      console.error("Email delivery failed:", error.message);
    }

    return res.status(201).json({
      message: "Thanks. Your request has been received.",
      id: submission.id,
      emailSent,
    });
  } catch (error) {
    return next(error);
  }
}
