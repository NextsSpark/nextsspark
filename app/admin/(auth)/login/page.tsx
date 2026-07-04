'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Eye, EyeOff, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      router.push('/admin');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8 lg:py-6 ">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl overflow-hidden rounded-4xl border border-slate-800 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="relative hidden w-[45%] flex-col justify-between overflow-hidden lg:flex">
          <Image
            src="/Login.jpg"
            width={600}
            height={600}
            alt="Team collaborating on a project"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-slate-900/70 to-cyan-700/70" />

          <div className="relative z-10 p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-cyan-100 backdrop-blur-sm">
              <Sparkles size={14} />
              <span>Secure Admin Workspace</span>
            </div>
            <h1 className="mt-6 max-w-sm text-4xl font-semibold leading-tight text-white">
              Manage your digital presence with confidence.
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-200">
              Access dashboards, publish content, and oversee opportunities from one elegant control panel.
            </p>
          </div>

          <div className="relative z-10 p-10">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-sm font-semibold text-white">Trusted by modern teams</p>
              <p className="mt-1 text-sm text-slate-200">Built for fast-moving marketing, product, and operations teams.</p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center bg-white px-6 py-10 sm:px-8 lg:w-[55%] lg:px-10">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <div className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
                <Lock size={14} className="mr-2" />
                Administrator Access
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
                Welcome back
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sign in to manage the website, blog, internships, and job listings.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-600" size={18} />
                  <input
                    id="email"
                    type="email"
                    placeholder="admin@nextsspark.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-600" size={18} />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-12 text-sm font-medium text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-cyan-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white transition ${
                  loading
                    ? 'cursor-not-allowed bg-slate-400'
                    : 'bg-linear-to-r from-cyan-600 to-blue-600 hover:shadow-lg hover:from-cyan-700 hover:to-blue-700'
                }`}
              >
                <span>{loading ? 'Signing in...' : 'Sign in'}</span>
                {loading && (
                  <svg className="ml-2 h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
