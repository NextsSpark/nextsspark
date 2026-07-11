import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import InternshipVerification from '@/models/InternshipVerification';

export const runtime = 'nodejs';

type Params = { params: Promise<{ id: string }> };

export async function POST(request: Request, { params }: Params) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json().catch(() => ({}));
    const record = await InternshipVerification.findOne({
      $or: [{ internshipId: id }, { opportunityId: id }],
    });

    if (!record) {
      return NextResponse.json({ success: false, message: 'Verification record not found.' }, { status: 404 });
    }

    record.isRevoked = true;
    record.status = 'Revoked';
    record.revokedDate = new Date();
    record.revokedReason = body.reason || 'Revoked by admin';
    await record.save();

    return NextResponse.json({ success: true, message: 'Verification revoked.', record });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Unable to revoke verification.' }, { status: 500 });
  }
}
