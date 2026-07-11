import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) {
    throw new Error('Unauthorized');
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not configured');
  }

  const payload = jwt.verify(token, secret) as { id: string; email: string; role?: string };
  if (payload.role !== 'admin') {
    throw new Error('Forbidden');
  }

  return payload;
}
