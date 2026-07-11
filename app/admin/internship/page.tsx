'use client';

import { useEffect, useState } from 'react';
import { Eye, QrCode, Copy, FileText, Trash2 } from 'lucide-react';

interface VerificationRecord {
  _id: string;
  verificationId: string;
  certificateNumber: string;
  fullName: string;
  internshipRole: string;
  status: string;
  certificateIssued: boolean;
  publicUrl?: string;
  qrCode?: string;
  isRevoked: boolean;
}

export default function AdminInternshipsPage() {
  const [records, setRecords] = useState<VerificationRecord[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadRecords() {
    try {
      setLoading(true);
      const response = await fetch('/api/verify/admin');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Unable to load verification records');
      setRecords(data.records || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadRecords();
  }, []);

  async function handleAction(path: string) {
    try {
      const response = await fetch(path, { method: 'POST' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Action failed');
      await loadRecords();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Internship Verification</h1>
            <p className="mt-1 text-sm text-slate-600">Manage internship verification records, certificates, and QR links.</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        {loading ? (
          <p className="text-sm text-slate-600">Loading verification records…</p>
        ) : records.length === 0 ? (
          <p className="text-sm text-slate-600">No verification records yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-slate-600">
                  <th className="px-3 py-3">Name</th>
                  <th className="px-3 py-3">Role</th>
                  <th className="px-3 py-3">Verification ID</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record._id} className="border-b border-gray-100 text-slate-700">
                    <td className="px-3 py-3 font-semibold">{record.fullName}</td>
                    <td className="px-3 py-3">{record.internshipRole}</td>
                    <td className="px-3 py-3">{record.verificationId}</td>
                    <td className="px-3 py-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${record.isRevoked ? 'bg-red-100 text-red-700' : 'bg-cyan-100 text-cyan-700'}`}>
                        {record.isRevoked ? 'Revoked' : record.status}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex flex-wrap gap-2">
                        <button onClick={() => window.open(record.publicUrl || `/verify/${record.verificationId}`, '_blank')} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Open verification page"><Eye size={16} /></button>
                        <button onClick={() => handleAction(`/api/verify/admin/${record._id}/qr`)} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Regenerate QR"><QrCode size={16} /></button>
                        <button onClick={() => { navigator.clipboard.writeText(record.publicUrl || `/verify/${record.verificationId}`); }} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Copy verification URL"><Copy size={16} /></button>
                        <button onClick={() => handleAction(`/api/verify/admin/${record._id}/issue`)} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Issue certificate"><FileText size={16} /></button>
                        <button onClick={() => handleAction(`/api/verify/admin/${record._id}/revoke`)} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Revoke verification"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
