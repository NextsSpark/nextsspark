import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import InternshipVerification from '@/models/InternshipVerification';
import { buildPublicUrl, buildQrCodeUrl, createVerificationToken, generateUniqueCode } from '@/lib/internshipVerification';

export const runtime = 'nodejs';

export async function GET() {
  try {
    await connectDB();

    const records = await InternshipVerification.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json({ success: true, records });
  } catch (error) {
    console.error('Admin verification fetch failed:', error);
    return NextResponse.json({ success: false, message: 'Unable to load verification records.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = body?.fullName?.toString().trim();
    const internshipRole = body?.internshipRole?.toString().trim();

    if (!fullName || !internshipRole) {
      return NextResponse.json({ success: false, message: 'Full name and internship role are required.' }, { status: 400 });
    }

    await connectDB();

    const verificationId = await generateUniqueCode(InternshipVerification, 'verificationId', 'NS-INT');
    const certificateNumber = await generateUniqueCode(InternshipVerification, 'certificateNumber', 'NS-CERT');
    const publicUrl = buildPublicUrl(verificationId);

    const record = await InternshipVerification.create({
      verificationId,
      certificateNumber,
      verificationToken: createVerificationToken(verificationId),
      internshipId: body?.internshipId?.toString().trim() || `internship-${Date.now()}`,
      opportunityId: body?.opportunityId?.toString().trim(),
      opportunityTitle: body?.opportunityTitle?.toString().trim(),
      fullName,
      internshipRole,
      department: body?.department?.toString().trim(),
      internshipType: body?.internshipType?.toString().trim(),
      status: 'Pending',
      certificateIssued: false,
      startDate: body?.startDate ? new Date(body.startDate) : undefined,
      endDate: body?.endDate ? new Date(body.endDate) : undefined,
      mentor: body?.mentor?.toString().trim(),
      skills: Array.isArray(body?.skills) ? body.skills : [],
      projects: Array.isArray(body?.projects) ? body.projects : [],
      qrCode: buildQrCodeUrl(publicUrl),
      publicUrl,
      isRevoked: false,
    });

    return NextResponse.json({ success: true, message: 'Verification record created.', record });
  } catch (error) {
    console.error('Verification record creation failed:', error);
    return NextResponse.json({ success: false, message: 'Unable to create verification record.' }, { status: 500 });
  }
}
