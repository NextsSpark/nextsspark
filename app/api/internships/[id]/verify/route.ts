import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import InternshipVerification from '@/models/InternshipVerification';
import { buildPublicUrl, buildQrCodeUrl } from '@/lib/internshipVerification';

export const runtime = 'nodejs';

type Params = { params: Promise<{ id: string }> };

export async function POST(_request: Request, { params }: Params) {
  try {
    await connectDB();
    const { id } = await params;
    const record = await InternshipVerification.findOne({
      $or: [{ internshipId: id }, { opportunityId: id }],
    });

    if (!record) {
      return NextResponse.json({ success: false, message: 'Verification record not found.' }, { status: 404 });
    }

    const publicUrl = record.publicUrl || buildPublicUrl(record.verificationId);
    record.status = 'Completed';
    record.certificateIssued = true;
    record.issueDate = new Date();
    record.publicUrl = publicUrl;
    record.qrCode = record.qrCode || buildQrCodeUrl(publicUrl);
    await record.save();

    return NextResponse.json({ success: true, message: 'Verification completed.', record });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Unable to verify internship.' }, { status: 500 });
  }
}
