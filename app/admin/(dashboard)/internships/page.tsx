'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { Eye, QrCode, Copy, FileText, Trash2, Pencil, Download, ShieldCheck } from 'lucide-react';

interface VerificationRecord {
  _id: string;
  verificationId?: string;
  certificateNumber?: string;
  fullName?: string;
  internshipRole?: string;
  status?: string;
  certificateIssued?: boolean;
  publicUrl?: string;
  qrCode?: string;
  isRevoked?: boolean;
  opportunityTitle?: string;
}

const initialForm = {
  fullName: '',
  internshipRole: '',
  department: '',
  internshipType: '',
  opportunityId: '',
  opportunityTitle: '',
  mentor: '',
  startDate: '',
  endDate: '',
  skills: '',
  projects: '',
};

export default function AdminInternshipsPage() {
  const [records, setRecords] = useState<VerificationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [formData, setFormData] = useState(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  async function loadRecords() {
    try {
      setLoading(true);
      const response = await fetch('/api/verify/admin');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Unable to load verification records');
      setRecords(Array.isArray(data.records) ? data.records : []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadRecords();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const payload = {
        ...formData,
        skills: formData.skills.split(',').map((item) => item.trim()).filter(Boolean),
        projects: formData.projects.split(',').map((item) => item.trim()).filter(Boolean),
      };

      const response = editingId
        ? await fetch(`/api/verify/admin/${editingId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
        : await fetch('/api/verify/admin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || data.message || 'Unable to save verification record');
      setFeedback({ type: 'success', message: editingId ? 'Verification record updated.' : `Verification record created for ${data.fullName || formData.fullName}` });
      setFormData(initialForm);
      setEditingId(null);
      await loadRecords();
    } catch (error) {
      setFeedback({ type: 'error', message: error instanceof Error ? error.message : 'Unable to save verification record' });
    } finally {
      setSubmitting(false);
    }
  }

  function handleEdit(record: VerificationRecord) {
    setEditingId(record._id);
    setFormData({
      fullName: record.fullName || '',
      internshipRole: record.internshipRole || '',
      department: '',
      internshipType: '',
      opportunityId: '',
      opportunityTitle: record.opportunityTitle || '',
      mentor: '',
      startDate: '',
      endDate: '',
      skills: '',
      projects: '',
    });
    setFeedback(null);
  }

  async function handleDelete(id: string) {
    if (!window.confirm('Delete this internship and its verification data?')) return;
    try {
      const response = await fetch(`/api/verify/admin/${id}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to delete verification record');
      setFeedback({ type: 'success', message: 'Verification record deleted.' });
      await loadRecords();
    } catch (error) {
      setFeedback({ type: 'error', message: error instanceof Error ? error.message : 'Unable to delete internship' });
    }
  }

  async function handleAction(path: string) {
    try {
      const response = await fetch(path, { method: 'POST' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || data.error || 'Action failed');
      setFeedback({ type: 'success', message: data.message || 'Action completed.' });
      await loadRecords();
    } catch (error) {
      setFeedback({ type: 'error', message: error instanceof Error ? error.message : 'Action failed' });
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Internship Verification</h1>
            <p className="mt-1 text-sm text-slate-600">Create a verification record for each intern, assign a unique ID, and issue a certificate when the internship is complete.</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">{editingId ? 'Update verification record' : 'Create new verification record'}</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-gray-200 px-3 py-2" value={formData.fullName} onChange={(event) => setFormData((current) => ({ ...current, fullName: event.target.value }))} placeholder="Full name" required />
          <input className="rounded-xl border border-gray-200 px-3 py-2" value={formData.internshipRole} onChange={(event) => setFormData((current) => ({ ...current, internshipRole: event.target.value }))} placeholder="Internship role" required />
          <input className="rounded-xl border border-gray-200 px-3 py-2" value={formData.department} onChange={(event) => setFormData((current) => ({ ...current, department: event.target.value }))} placeholder="Department" />
          <input className="rounded-xl border border-gray-200 px-3 py-2" value={formData.internshipType} onChange={(event) => setFormData((current) => ({ ...current, internshipType: event.target.value }))} placeholder="Internship type" />
          <input className="rounded-xl border border-gray-200 px-3 py-2" value={formData.opportunityTitle} onChange={(event) => setFormData((current) => ({ ...current, opportunityTitle: event.target.value }))} placeholder="Related opportunity title (optional)" />
          <input className="rounded-xl border border-gray-200 px-3 py-2" value={formData.opportunityId} onChange={(event) => setFormData((current) => ({ ...current, opportunityId: event.target.value }))} placeholder="Related opportunity ID (optional)" />
          <input className="rounded-xl border border-gray-200 px-3 py-2" value={formData.mentor} onChange={(event) => setFormData((current) => ({ ...current, mentor: event.target.value }))} placeholder="Mentor" />
          <input className="rounded-xl border border-gray-200 px-3 py-2" type="date" value={formData.startDate} onChange={(event) => setFormData((current) => ({ ...current, startDate: event.target.value }))} />
          <input className="rounded-xl border border-gray-200 px-3 py-2" type="date" value={formData.endDate} onChange={(event) => setFormData((current) => ({ ...current, endDate: event.target.value }))} />
          <input className="rounded-xl border border-gray-200 px-3 py-2 md:col-span-2" value={formData.skills} onChange={(event) => setFormData((current) => ({ ...current, skills: event.target.value }))} placeholder="Skills (comma separated)" />
          <input className="rounded-xl border border-gray-200 px-3 py-2 md:col-span-2" value={formData.projects} onChange={(event) => setFormData((current) => ({ ...current, projects: event.target.value }))} placeholder="Projects (comma separated)" />
          <div className="md:col-span-2 flex flex-wrap items-center gap-3">
            <button type="submit" disabled={submitting} className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-70">{submitting ? (editingId ? 'Updating…' : 'Creating…') : (editingId ? 'Update verification record' : 'Create verification record')}</button>
            {editingId ? <button type="button" onClick={() => { setEditingId(null); setFormData(initialForm); setFeedback(null); }} className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-slate-700">Cancel</button> : null}
            {feedback ? <p className={`text-sm ${feedback.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>{feedback.message}</p> : null}
          </div>
        </form>
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
                    <td className="px-3 py-3">{record.verificationId || '—'}</td>
                    <td className="px-3 py-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${record.isRevoked ? 'bg-red-100 text-red-700' : 'bg-cyan-100 text-cyan-700'}`}>
                        {record.isRevoked ? 'Revoked' : (record.status || 'Pending')}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex flex-wrap gap-2">
                        <button onClick={() => window.open(record.publicUrl || `/verify/${record.verificationId}`, '_blank')} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Open verification page"><Eye size={16} /></button>
                        <button onClick={() => handleAction(`/api/verify/admin/${record._id}/qr`)} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Regenerate QR"><QrCode size={16} /></button>
                        <a href={record.qrCode || '#'} target="_blank" rel="noreferrer" className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Download QR"><Download size={16} /></a>
                        <button onClick={() => { navigator.clipboard.writeText(record.publicUrl || `/verify/${record.verificationId}`); }} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Copy verification URL"><Copy size={16} /></button>
                        <button onClick={() => handleAction(`/api/verify/admin/${record._id}/issue`)} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Issue certificate"><ShieldCheck size={16} /></button>
                        <button onClick={() => handleEdit(record)} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Edit verification"><Pencil size={16} /></button>
                        <button onClick={() => handleDelete(record._id)} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Delete verification"><Trash2 size={16} /></button>
                        <button onClick={() => handleAction(`/api/verify/admin/${record._id}/revoke`)} className="rounded-lg border border-gray-200 p-2 text-slate-600 hover:border-cyan-500 hover:text-cyan-600" title="Revoke verification"><FileText size={16} /></button>
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
