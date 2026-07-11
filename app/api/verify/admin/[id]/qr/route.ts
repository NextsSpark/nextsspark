import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import InternshipVerification from '@/models/InternshipVerification';
import { buildPublicUrl, buildQrCodeUrl } from '@/lib/internshipVerification';

export const runtime = 'nodejs';

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectDB();

    const record = await InternshipVerification.findById(id);
    if (!record) {
      return NextResponse.json({ success: false, message: 'Verification record not found.' }, { status: 404 });
    }

    const publicUrl = record.publicUrl || buildPublicUrl(record.verificationId || `NS-INT-${Date.now()}`);
    record.qrCode = buildQrCodeUrl(publicUrl);
    record.publicUrl = publicUrl;
    record.qrGenerated = true;
    await record.save();

    return NextResponse.json({ success: true, message: 'QR code refreshed.', record: { publicUrl, qrCode: record.qrCode } });
  } catch (error) {
    console.error('QR regeneration failed:', error);
    return NextResponse.json({ success: false, message: 'Unable to regenerate QR code.' }, { status: 500 });
  }
}
