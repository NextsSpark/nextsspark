import mongoose, { Schema, Model } from "mongoose";

export interface IOpportunity {
  title: string;
  category: "job" | "internship";

  description: string;
  skills: string[];

  // Job fields
  department?: string;
  location?: string;
  employmentType?: string;
  salary?: string;
  experience?: string;

  // Internship fields
  duration?: string;
  stipend?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

const OpportunitySchema = new Schema<IOpportunity>(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["job", "internship"],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    skills: [String],

    department: String,
    location: String,
    employmentType: String,
    salary: String,
    experience: String,

    duration: String,
    stipend: String,
  },
  {
    timestamps: true,
  }
);

const Opportunity =
  (mongoose.models.Opportunity as Model<IOpportunity>) ||
  mongoose.model<IOpportunity>("Opportunity", OpportunitySchema);

export default Opportunity;