import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    opportunityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Opportunity",
      required: true,
    },

    name: String,
    email: String,
    phone: String,

    resumeUrl: String,

    coverLetter: String,

    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);