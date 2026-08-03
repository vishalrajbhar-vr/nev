import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["contact", "callback", "product", "dealership"],
      default: "contact",
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    emailSent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Submission = mongoose.model("Submission", submissionSchema);
