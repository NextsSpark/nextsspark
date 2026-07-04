import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IEnquiry extends Document {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  status: string;
  createdAt: Date;
}

const enquirySchema = new Schema<IEnquiry>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      trim: true,
      default: '',
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      default: 'New',
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Enquiry: Model<IEnquiry> = mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', enquirySchema);

export default Enquiry;
