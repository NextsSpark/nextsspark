'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BadgeCheck, AlertCircle, Loader2 } from 'lucide-react';

interface VerificationRecord {
  verificationId: string;
  certificateNumber: string;
  fullName: string;
  internshipRole: string;
  department?: string;
  internshipType?: string;
  status: string;
  certificateIssued: boolean;
  issueDate?: string;
  startDate?: string;
  endDate?: string;
  skills: string[];
  projects: string[];
  mentor?: string;
  publicUrl?: string;
  qrCode?: string;
}

export default function VerificationDetailPage() {
  const params = useParams();
  const verificationId = params?.verificationId as string | undefined;
  const [record, setRecord] = useState<VerificationRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadRecord() {
      if (!verificationId) {
        setError('Verification record not found.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/verify?q=${encodeURIComponent(verificationId)}`);
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Verification record not found.');
        }

        setRecord(data.record);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Verification record not found.');
      } finally {
        setLoading(false);
      }
    }

    loadRecord();
  }, [verificationId]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="rounded-3xl border border-slate-800 bg-white/10 px-6 py-8 text-center text-white backdrop-blur-xl">
          <Loader2 className="mx-auto mb-4 animate-spin" size={24} />
          <p className="text-sm text-slate-300">Loading verification details…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-800 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        {error || !record ? (
          <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-6 text-red-200">
            <div className="flex items-start gap-3">
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              <div>
                <h2 className="text-lg font-semibold">Verification Record Not Found</h2>
                <p className="mt-1 text-sm text-red-100">{error || 'The requested verification record could not be found.'}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 text-slate-100">
            <div className="flex items-start gap-3">
              <BadgeCheck size={20} className="mt-0.5 shrink-0 text-emerald-300" />
              <div>
                <h2 className="text-2xl font-semibold">{record.fullName}</h2>
                <p className="mt-2 text-sm text-slate-300">{record.internshipRole}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Verification ID</p>
                <p className="mt-2 font-semibold text-white">{record.verificationId}</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Certificate Number</p>
                <p className="mt-2 font-semibold text-white">{record.certificateNumber}</p>
              </div>
            </div>
            {record.qrCode ? (
              <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">QR Code</p>
                <img src={record.qrCode} alt="Verification QR code" className="mt-3 h-32 w-32 rounded-2xl border border-slate-700 bg-white p-2" />
              </div>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/verify" className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-500">Search another record</Link>
              <Link href="/" className="rounded-2xl border border-cyan-500/30 bg-cyan-600/20 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-600/30">Back to home</Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
