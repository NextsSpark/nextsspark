'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, BadgeCheck, AlertCircle, Loader2 } from 'lucide-react';

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

export default function VerifyPage() {
  const [query, setQuery] = useState('');
  const [record, setRecord] = useState<VerificationRecord | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setRecord(null);

    try {
      const response = await fetch(`/api/verify?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Verification record not found.');
      }

      setRecord(data.record);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to verify record right now.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-800 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <BadgeCheck size={16} className="mr-2" />
            NEXTSSPARK Internship Verification
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Verify an internship record</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Enter a verification ID or certificate number to confirm an internship with NEXTSSPARK.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mb-10 max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg sm:p-6">
          <label className="mb-2 block text-sm font-semibold text-slate-200">Verification ID or Certificate Number</label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="NS-INT-2026-0001"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 py-3 pl-10 pr-4 text-sm text-white outline-none ring-0 focus:border-cyan-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" size={16} /> Searching</span> : 'Verify'}
            </button>
          </div>
        </form>

        {error && (
          <div className="mx-auto max-w-3xl rounded-3xl border border-red-400/30 bg-red-500/10 p-6 text-red-200">
            <div className="flex items-start gap-3">
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              <div>
                <h2 className="text-lg font-semibold">Verification Record Not Found</h2>
                <p className="mt-1 text-sm text-red-100">{error}</p>
              </div>
            </div>
          </div>
        )}

        {record && (
          <div className="mx-auto max-w-3xl rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 text-slate-100 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-200">
                  <BadgeCheck size={16} className="mr-2" />
                  Verified Record
                </div>
                <h2 className="text-2xl font-semibold">{record.fullName}</h2>
                <p className="mt-2 text-sm text-slate-300">{record.internshipRole}</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                <p className="font-semibold text-white">Status: {record.status}</p>
                <p className="mt-1">Department: {record.department || 'Not provided'}</p>
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
              <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Internship Type</p>
                <p className="mt-2 font-semibold text-white">{record.internshipType || 'Not provided'}</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Issue Date</p>
                <p className="mt-2 font-semibold text-white">{record.issueDate ? new Date(record.issueDate).toLocaleDateString() : 'Not issued yet'}</p>
              </div>
            </div>

            {record.skills?.length ? (
              <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Skills</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {record.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-100">{skill}</span>
                  ))}
                </div>
              </div>
            ) : null}

            {record.projects?.length ? (
              <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Projects</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  {record.projects.map((project) => <li key={project}>{project}</li>)}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-500">
                Contact NEXTSSPARK
              </Link>
              <Link href="/" className="rounded-2xl border border-cyan-500/30 bg-cyan-600/20 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-600/30">
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
