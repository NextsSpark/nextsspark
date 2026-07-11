import mongoose, { Schema, type Model, type Document } from 'mongoose';

export type VerificationStatus = 'Pending' | 'Ongoing' | 'Completed' | 'Certificate Issued' | 'Revoked';

export interface IInternshipVerification extends Document {
  verificationId: string;
  certificateNumber: string;
  verificationToken: string;
  internshipId: string;
  opportunityId?: string;
  opportunityTitle?: string;
  fullName: string;
  internshipRole: string;
  department?: string;
  internshipType?: string;
  status: VerificationStatus;
  certificateIssued: boolean;
  issueDate?: Date;
  startDate?: Date;
  endDate?: Date;
  skills?: string[];
  projects?: string[];
  mentor?: string;
  qrCode?: string;
  publicUrl?: string;
  qrGenerated?: boolean;
  isRevoked: boolean;
  revokedDate?: Date;
  revokedReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

const internshipVerificationSchema = new Schema<IInternshipVerification>(
  {
    verificationId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    certificateNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    verificationToken: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    internshipId: {
      type: String,
      required: true,
      trim: true,
    },
    opportunityId: {
      type: String,
      trim: true,
    },
    opportunityTitle: {
      type: String,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    internshipRole: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      trim: true,
    },
    internshipType: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Ongoing', 'Completed', 'Certificate Issued', 'Revoked'],
      default: 'Pending',
    },
    certificateIssued: {
      type: Boolean,
      default: false,
    },
    issueDate: Date,
    startDate: Date,
    endDate: Date,
    skills: [String],
    projects: [String],
    mentor: {
      type: String,
      trim: true,
    },
    qrCode: {
      type: String,
      trim: true,
    },
    publicUrl: {
      type: String,
      trim: true,
    },
    qrGenerated: {
      type: Boolean,
      default: false,
    },
    isRevoked: {
      type: Boolean,
      default: false,
    },
    revokedDate: {
      type: Date,
    },
    revokedReason: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const InternshipVerification: Model<IInternshipVerification> = mongoose.models.InternshipVerification || mongoose.model<IInternshipVerification>('InternshipVerification', internshipVerificationSchema);

export default InternshipVerification;
