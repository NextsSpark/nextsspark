import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';
import { Resend } from 'resend';

export const runtime = 'nodejs';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const contactEmail = process.env.CONTACT_EMAIL?.trim() || 'nextsspark@gmail.com';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContactData(data: ContactFormData) {
  const errors: Record<string, string> = {};

  if (!data.name?.trim()) {
    errors.name = 'Name is required.';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required.';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.subject?.trim()) {
    errors.subject = 'Subject is required.';
  }

  if (!data.message?.trim()) {
    errors.message = 'Message is required.';
  }

  return errors;
}

function buildAdminEmailHtml(data: ContactFormData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
      <h2 style="color: #0f172a; margin-bottom: 16px;">New Enquiry Received</h2>
      <p style="color: #475569; line-height: 1.6;">A new contact enquiry has been submitted through the NEXTSSPARK website.</p>
      <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 16px; border: 1px solid #e2e8f0;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; color: #334155;">${data.message}</p>
      </div>
    </div>
  `;
}

function buildCustomerEmailHtml(name: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
      <h2 style="color: #0f172a; margin-bottom: 16px;">Thank you for contacting NEXTSSPARK</h2>
      <p style="color: #475569; line-height: 1.6;">Hi ${name},</p>
      <p style="color: #475569; line-height: 1.6;">Thank you for reaching out. We have received your enquiry and will respond within one business day.</p>
      <p style="color: #475569; line-height: 1.6;">We appreciate your interest in working with NEXTSSPARK.</p>
      <p style="color: #475569; line-height: 1.6;">Best regards,<br/>The NEXTSSPARK Team</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    // Parse the incoming form payload and validate it before touching the database.
    const body = (await request.json()) as ContactFormData;
    const errors = validateContactData(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please correct the highlighted fields.',
          errors,
        },
        { status: 400 }
      );
    }

    // Persist the enquiry in MongoDB so it can be reviewed later.
    await connectDB();

    const enquiry = await Enquiry.create({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company?.trim() || '',
      subject: body.subject.trim(),
      message: body.message.trim(),
    });

    if (!resend) {
      throw new Error('RESEND_API_KEY is missing.');
    }

    // Notify the team about the new enquiry.
    await resend.emails.send({
      from: 'NEXTSSPARK <onboarding@resend.dev>',
      to: [contactEmail],
      subject: `New enquiry: ${body.subject}`,
      html: buildAdminEmailHtml(body),
    });

    // Send a confirmation email to the person who submitted the form.
    await resend.emails.send({
      from: 'NEXTSSPARK <onboarding@resend.dev>',
      to: [body.email],
      subject: 'Thanks for contacting NEXTSSPARK',
      html: buildCustomerEmailHtml(body.name.trim()),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been sent successfully.',
        enquiryId: enquiry._id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'We could not send your enquiry right now. Please try again later.',
      },
      { status: 500 }
    );
  }
}
