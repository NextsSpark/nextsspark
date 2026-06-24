'use client';

import { Mail, Phone, MapPin, Clock, Send, ChevronDown, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaGithub, FaFacebookF } from 'react-icons/fa6';
import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What is your typical project timeline?',
    a: 'Timelines depend on project scope and complexity. After an initial discovery call, we provide a detailed roadmap. Most engagements range from 4 weeks for MVPs to 6 months for enterprise platforms.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes. We offer structured maintenance & support retainers post-launch — from bug fixes and security patches to feature iterations and performance monitoring.',
  },
  {
    q: 'What does your onboarding process look like?',
    a: 'We start with a free discovery call, then scope a proposal within 48 hours. Once aligned on budget and timeline, we kick off with a structured sprint plan and a dedicated project manager.',
  },
  {
    q: 'Do you sign NDAs and handle IP ownership?',
    a: 'Absolutely. We sign NDAs before any sensitive discussions and all IP created during the engagement is fully transferred to you upon project completion.',
  },
  {
    q: 'Can you work with our existing in-house team?',
    a: 'Yes — we regularly integrate into existing engineering teams, following your preferred tools, processes, and code standards to ensure a seamless collaboration.',
  },
];

const socialLinks = [
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white' },
  { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://x.com', color: 'hover:bg-black hover:border-black hover:text-white' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com', color: 'hover:bg-gray-900 hover:border-gray-900 hover:text-white' },
  { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com', color: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <>
      {/* ── Hero + Form ─────────────────────────────────── */}
      <section className="min-h-screen bg-navy-900 text-white relative overflow-hidden bg-grid-pattern-dark flex items-center">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ── Left: Brand Identity ── */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-7">
                <Sparkles size={14} className="text-cyan-400" />
                <span className="text-cyan-300 text-xs font-bold tracking-widest uppercase">Let's Talk</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                Start a <br />
                <span className="gradient-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                  Conversation
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                Whether you have a product to build, a team to train, or a challenge to solve — we're ready to listen and craft a plan that fits.
              </p>

              {/* Contact detail rows */}
              <div className="space-y-5 mb-10">
                {[
                  { icon: MapPin, label: 'Lahore, Punjab, Pakistan', href: null },
                  { icon: Mail, label: 'nextsspark@gmail.com', href: 'mailto:nextsspark@gmail.com' },
                  { icon: Phone, label: '+92 (300) 123-4567', href: 'tel:+923001234567' },
                  { icon: Clock, label: 'Mon – Fri, 9 AM – 6 PM PKT', href: null },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 transition-all duration-200 flex-shrink-0">
                      <Icon size={17} />
                    </div>
                    {href ? (
                      <a href={href} className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors">
                        {label}
                      </a>
                    ) : (
                      <span className="text-gray-300 text-sm font-medium">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex items-center space-x-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-gray-400 flex items-center justify-center transition-all duration-200 ${color} hover:scale-105`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: Contact Form ── */}
            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-cyan-500/15 border border-cyan-400/30 rounded-2xl flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
                    Thank you for reaching out. Our team will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-1">Send us a message</h2>
                    <p className="text-gray-500 text-sm">Fill in the details below and we'll respond promptly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Full Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Email Address <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name (optional)"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Enquiry Type <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" disabled className="bg-navy-900">Select an option…</option>
                        <option value="Software Development" className="bg-navy-900">Software Development</option>
                        <option value="IT Consulting" className="bg-navy-900">IT Consulting</option>
                        <option value="IT Training" className="bg-navy-900">IT Training</option>
                        <option value="Project Quote" className="bg-navy-900">Project Quote</option>
                        <option value="Partnership" className="bg-navy-900">Partnership</option>
                        <option value="General Inquiry" className="bg-navy-900">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Message <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe your project, goals, or any questions you have…"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 focus:ring-1 focus:ring-cyan-400/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-cyan px-8 py-4 rounded-xl text-navy-900 font-extrabold text-sm flex items-center justify-center space-x-2 group mt-2"
                    >
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Send Message</span>
                    </button>

                    <p className="text-center text-xs text-gray-600 pt-1">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Signals ──────────────────────────────── */}
      <section className="section-lg bg-gray-50 bg-dot-pattern">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Why NEXTSSPARK</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800 tracking-tight">
              What you can expect
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '24-Hour Response',
                desc: 'We acknowledge every inquiry within one business day — no chasing required.',
                accent: 'from-cyan-400 to-cyan-500',
              },
              {
                title: 'Transparent Pricing',
                desc: 'Fixed-price or time-and-material — you choose. No hidden fees, ever.',
                accent: 'from-cyan-500 to-blue-400',
              },
              {
                title: 'Senior-Led Teams',
                desc: 'Your project is led by experienced engineers and architects, not juniors.',
                accent: 'from-blue-400 to-purple-400',
              },
              {
                title: 'Post-Launch Support',
                desc: 'Structured SLAs and maintenance retainers keep your product running smoothly.',
                accent: 'from-purple-400 to-pink-400',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 border border-gray-200/60 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 glow-card"
              >
                <div className={`w-10 h-1.5 rounded-full bg-gradient-to-r ${item.accent} mb-5 group-hover:w-14 transition-all duration-300`} />
                <h3 className="font-bold text-navy-800 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="section-lg bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">FAQs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800 tracking-tight">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === i ? 'border-cyan-400 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left group"
                >
                  <span className={`text-base font-bold transition-colors ${openFaq === i ? 'text-cyan-600' : 'text-navy-800 group-hover:text-cyan-600'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-cyan-500' : ''}`}
                  />
                </button>
                <div
                  className={`px-7 transition-all duration-300 ease-in-out ${openFaq === i ? 'pb-6 max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────── */}
      <section className="section-lg bg-navy-900 text-white relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulseGlow pointer-events-none" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">Ready to build together?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            Scroll back up to send us a message, or explore our work to see what we're capable of.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn-cyan px-8 py-4 rounded-xl text-navy-900 font-extrabold text-sm inline-flex items-center space-x-2 group"
            >
              <span>Send a Message</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/portfolio"
              className="px-8 py-4 border border-gray-700 bg-white/5 backdrop-blur-sm rounded-xl text-white font-bold text-sm hover:bg-white/10 hover:border-gray-500 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
