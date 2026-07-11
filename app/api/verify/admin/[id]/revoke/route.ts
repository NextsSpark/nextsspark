import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import InternshipVerification from '@/models/InternshipVerification';

export const runtime = 'nodejs';

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectDB();

    const record = await InternshipVerification.findById(id);
    if (!record) {
      return NextResponse.json({ success: false, message: 'Verification record not found.' }, { status: 404 });
    }

    record.isRevoked = true;
    record.status = 'Revoked';
    record.revokedDate = new Date();
    record.revokedReason = 'Revoked by admin';
    await record.save();

    return NextResponse.json({ success: true, message: 'Verification revoked.', record });
  } catch (error) {
    console.error('Revocation failed:', error);
    return NextResponse.json({ success: false, message: 'Unable to revoke verification.' }, { status: 500 });
  }
}
