import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import InternshipVerification from '@/models/InternshipVerification';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.trim();

    if (!query) {
      return NextResponse.json({ success: false, message: 'A verification ID or certificate number is required.' }, { status: 400 });
    }

    await connectDB();

    const record = await InternshipVerification.findOne({
      $or: [
        { verificationId: query },
        { certificateNumber: query },
      ],
    }).lean();

    if (!record || record.isRevoked) {
      return NextResponse.json({ success: false, message: 'Verification record not found.' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      record: {
        verificationId: record.verificationId,
        certificateNumber: record.certificateNumber,
        fullName: record.fullName,
        internshipRole: record.internshipRole,
        department: record.department,
        internshipType: record.internshipType,
        status: record.status,
        certificateIssued: record.certificateIssued,
        issueDate: record.issueDate,
        startDate: record.startDate,
        endDate: record.endDate,
        skills: record.skills || [],
        projects: record.projects || [],
        mentor: record.mentor,
        publicUrl: record.publicUrl,
        qrCode: record.qrCode,
      },
    });
  } catch (error) {
    console.error('Verification lookup failed:', error);
    return NextResponse.json({ success: false, message: 'Unable to verify record right now.' }, { status: 500 });
  }
}
