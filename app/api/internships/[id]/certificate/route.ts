import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import InternshipVerification from '@/models/InternshipVerification';

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

    record.certificateIssued = true;
    record.issueDate = new Date();
    record.status = 'Completed';
    await record.save();

    return NextResponse.json({ success: true, message: 'Certificate generated.', record });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Unable to generate certificate.' }, { status: 500 });
  }
}
