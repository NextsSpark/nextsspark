'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, AlertCircle, CheckCircle } from 'lucide-react';

export default function NewOpportunityPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    category: 'job',
    description: '',
    department: '',
    location: '',
    type: '', // Full-time, Part-time, etc.
    salary: '',
    skills: '',
    duration: '', // For internships
    stipend: '', // For internships
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      setSuccess(false);

      const response = await fetch('/api/opportunities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          skills: formData.skills
            .split(',')
            .map((skill) => skill.trim())
            .filter(Boolean),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create opportunity');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/admin/opportunities');
        router.refresh();
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-4 mb-8">
        <Link
          href="/admin/opportunities"
          className="p-2 rounded-lg hover:bg-gray-200 transition-colors group"
        >
          <ArrowLeft size={24} className="text-gray-600 group-hover:text-navy-900" />
        </Link>
        <div>
          <h1 className="text-4xl font-extrabold text-navy-900 mb-2 tracking-tight">
            Create New Opportunity
          </h1>
          <p className="text-gray-600">Add a new job opening or internship program</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Success Message */}
          {success && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
              <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={20} />
              <div>
                <p className="text-green-800 font-semibold">Success!</p>
                <p className="text-green-700 text-sm">Opportunity created. Redirecting...</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
              <AlertCircle className="text-red-600 mt-0.5 shrink-0" size={20} />
              <div>
                <p className="text-red-800 font-semibold">Error</p>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Category Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-navy-900 mb-3">
                Opportunity Type *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white font-medium text-gray-900"
                required
              >
                <option value="job">Job Opening</option>
                <option value="internship">Internship Program</option>
              </select>
            </div>
          </div>

          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-extrabold text-navy-900 mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-navy-900 mb-2">
                  Title *
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  placeholder={
                    formData.category === 'job'
                      ? 'e.g., Senior React Developer'
                      : 'e.g., Summer Internship 2024'
                  }
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 font-medium text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-semibold text-navy-900 mb-2">
                  Department/Team *
                </label>
                <input
                  id="department"
                  type="text"
                  name="department"
                  placeholder="e.g., Engineering, Design"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 font-medium text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-navy-900 mb-2">
                  Location *
                </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  placeholder="e.g., New York, USA"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 font-medium text-gray-900"
                  required
                />
              </div>

              {formData.category === 'job' ? (
                <div>
                  <label htmlFor="type" className="block text-sm font-semibold text-navy-900 mb-2">
                    Employment Type *
                  </label>
                  <input
                    id="type"
                    type="text"
                    name="type"
                    placeholder="e.g., Full-time, Remote"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 font-medium text-gray-900"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label htmlFor="duration" className="block text-sm font-semibold text-navy-900 mb-2">
                    Duration *
                  </label>
                  <input
                    id="duration"
                    type="text"
                    name="duration"
                    placeholder="e.g., 3 months, 6 weeks"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 font-medium text-gray-900"
                    required
                  />
                </div>
              )}

              {formData.category === 'job' ? (
                <div>
                  <label htmlFor="salary" className="block text-sm font-semibold text-navy-900 mb-2">
                    Salary Range
                  </label>
                  <input
                    id="salary"
                    type="text"
                    name="salary"
                    placeholder="e.g., $100k - $150k"
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 font-medium text-gray-900"
                  />
                </div>
              ) : (
                <div>
                  <label htmlFor="stipend" className="block text-sm font-semibold text-navy-900 mb-2">
                    Stipend/Compensation
                  </label>
                  <input
                    id="stipend"
                    type="text"
                    name="stipend"
                    placeholder="e.g., $2000/month"
                    value={formData.stipend}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 font-medium text-gray-900"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-navy-900 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Provide a detailed description of the role, responsibilities, and what we're looking for..."
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 font-medium text-gray-900 placeholder-gray-500"
              required
            />
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="skills" className="block text-sm font-semibold text-navy-900 mb-2">
              Required Skills *
            </label>
            <textarea
              id="skills"
              name="skills"
              placeholder="Separate skills with commas (e.g., React, Next.js, TypeScript, Node.js)"
              value={formData.skills}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 font-medium text-gray-900 placeholder-gray-500"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-8 border-t border-gray-200">
            <button
              type="submit"
              disabled={loading || success}
              className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-extrabold text-white text-base tracking-wide uppercase transition-all duration-200 ${
                loading || success
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-linear-to-r from-cyan-500 to-cyan-600 hover:shadow-lg hover:from-cyan-600 hover:to-cyan-700 active:scale-95'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Creating...</span>
                </>
              ) : (
                <>
                  <Plus size={20} />
                  <span>Create Opportunity</span>
                </>
              )}
            </button>

            <Link
              href="/admin/opportunities"
              className="flex items-center justify-center px-6 py-3 rounded-lg font-extrabold text-navy-900 bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
