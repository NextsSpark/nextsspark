export type VerificationStatus =
  | 'Pending'
  | 'Selected'
  | 'Joined'
  | 'Ongoing'
  | 'Completed'
  | 'Certificate Issued'
  | 'Verified'
  | 'Revoked'
  | 'Cancelled'
  | 'Rejected';

export const verificationStatuses: VerificationStatus[] = [
  'Pending',
  'Selected',
  'Joined',
  'Ongoing',
  'Completed',
  'Certificate Issued',
  'Verified',
  'Revoked',
  'Cancelled',
  'Rejected',
];

const transitionMap: Record<VerificationStatus, VerificationStatus[]> = {
  Pending: ['Selected', 'Rejected', 'Cancelled'],
  Selected: ['Joined', 'Rejected', 'Cancelled'],
  Joined: ['Ongoing', 'Rejected', 'Cancelled'],
  Ongoing: ['Completed', 'Rejected', 'Cancelled'],
  Completed: ['Certificate Issued', 'Verified'],
  'Certificate Issued': ['Verified', 'Revoked'],
  Verified: ['Revoked'],
  Revoked: [],
  Cancelled: [],
  Rejected: [],
};

export function canTransition(current: VerificationStatus | undefined, next: VerificationStatus) {
  const safeCurrent = current || 'Pending';
  return transitionMap[safeCurrent]?.includes(next) || false;
}

export function buildPublicUrl(verificationId: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://nextsspark.com';
  return `${baseUrl.replace(/\/$/, '')}/verify/${verificationId}`;
}

export function buildQrCodeUrl(publicUrl: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(publicUrl)}`;
}

export async function generateUniqueCode(model: any, field: 'verificationId' | 'certificateNumber', prefix: 'NS-INT' | 'NS-CERT') {
  const year = new Date().getFullYear();
  const pattern = prefix === 'NS-INT' ? `^${prefix}-${year}-` : `^${prefix}-${year}-`;
  const regexp = new RegExp(pattern);

  const latest = await model
    .find({ [field]: regexp })
    .sort({ createdAt: -1 })
    .limit(1)
    .lean();

  const current = latest[0]?.[field];
  const number = current ? Number(current.split('-').pop()) : 0;
  const next = String(number + 1).padStart(4, '0');

  return `${prefix}-${year}-${next}`;
}

export function createVerificationToken(verificationId: string) {
  return `${verificationId}-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;
}

export function sanitizeVerificationRecord(record: Record<string, any>) {
  const { email, phone, address, verificationToken, _id, __v, ...rest } = record;
  return rest;
}

export async function prepareInternshipPayload(model: any, body: Record<string, any>, existing?: Record<string, any>) {
  const payload = {
    ...(existing || {}),
    ...body,
    category: 'internship',
  } as Record<string, any>;

  const currentStatus = payload.verificationStatus || payload.internshipStatus || 'Pending';
  const nextStatus = payload.verificationStatus || payload.internshipStatus || currentStatus;

  if (!payload.verificationId) {
    payload.verificationId = await generateUniqueCode(model, 'verificationId', 'NS-INT');
  }

  if (!payload.certificateNumber) {
    payload.certificateNumber = await generateUniqueCode(model, 'certificateNumber', 'NS-CERT');
  }

  if (!payload.verificationToken) {
    payload.verificationToken = createVerificationToken(payload.verificationId);
  }

  if (!payload.publicUrl) {
    payload.publicUrl = buildPublicUrl(payload.verificationId);
  }

  if (!payload.qrCode) {
    payload.qrCode = buildQrCodeUrl(payload.publicUrl);
  }

  payload.verificationStatus = nextStatus;
  payload.internshipStatus = nextStatus;
  payload.publicVisibility = payload.publicVisibility ?? true;
  payload.certificateGenerated = Boolean(payload.certificateGenerated || payload.certificateIssued);
  payload.qrGenerated = Boolean(payload.qrGenerated || payload.qrCode);
  payload.certificateStatus = payload.certificateStatus || (payload.certificateIssued ? 'Issued' : payload.certificateGenerated ? 'Generated' : 'Not Generated');
  payload.offerLetterStatus = payload.offerLetterStatus || 'Not Generated';
  payload.joiningLetterStatus = payload.joiningLetterStatus || 'Not Generated';
  payload.experienceLetterStatus = payload.experienceLetterStatus || 'Not Generated';
  payload.verificationDate = payload.verificationDate || (payload.verificationStatus && payload.verificationStatus !== 'Pending' ? new Date() : undefined);
  payload.issueDate = payload.issueDate || (payload.certificateIssued ? new Date() : undefined);

  if (payload.revokedReason) {
    payload.revokedDate = payload.revokedDate || new Date();
  }

  return payload;
}
