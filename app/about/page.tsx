import type { Metadata } from 'next';
import { Lightbulb, Eye, Target, Heart, Award, Users, Cpu, ShieldCheck, Sparkles, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About NEXTSSPARK | Trusted Software Development Partner',
  description:
    'Discover NEXTSSPARK mission, values, milestones, and commitment to building innovative digital experiences for modern businesses.',
  keywords: ['about NEXTSSPARK', 'software company', 'technology partner', 'digital transformation company'],
  alternates: {
    canonical: 'https://nextsspark.com/about',
  },
  openGraph: {
    title: 'About NEXTSSPARK | Trusted Software Development Partner',
    description: 'Learn about our journey, values, and the team behind custom software and consulting solutions.',
    url: 'https://nextsspark.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About NEXTSSPARK' }],
  },
};

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries to create cutting-edge, future-proof digital solutions.',
      color: 'from-cyan-400 to-cyan-500',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear, honest communication and client-first ethics in every interaction.',
      color: 'from-cyan-500 to-blue-400',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for architectural and visual perfection in everything we build.',
      color: 'from-blue-400 to-purple-400',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Doing the right thing for our clients, partners, and our community, always.',
      color: 'from-purple-400 to-pink-400',
    },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Company Founded',
      description: 'NEXTSSPARK was established in Lahore with a mission to deliver quality digital solutions for growing businesses.',
    },
    {
      year: '2025',
      title: 'First Client Projects',
      description: 'Delivered our first batch of web platforms including e-commerce, healthcare, and agency sites.',
    },
    {
      year: '2026',
      title: 'Team Growth',
      description: 'Expanded the core team with skilled developers, an AI engineer, and a creative lead.',
    },
    {
      year: '2026',
      title: 'Building Forward',
      description: 'Actively taking on more projects and expanding into consulting and training services.',
    },
  ];

  const highlights = [
    { title: '10+ Projects Delivered', desc: 'Web platforms, SaaS, healthcare, and e-commerce', icon: Award },
    { title: '10+ Satisfied Clients', desc: 'Startups and growing businesses across industries', icon: Users },
    { title: '5+ Team Members', desc: 'Developers, designers, and strategists', icon: Cpu },
    { title: '100% Client Retention', desc: 'Clients keep coming back for more', icon: ShieldCheck },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-24 relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl animate-pulseGlow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-6">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold tracking-wide">Who We Are</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">About Us</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              A small but focused team delivering quality software, consulting, and training since 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-lg bg-white relative bg-dot-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
                <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Our Narrative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-6 tracking-tight">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                NEXTSSPARK started in 2025 with a clear goal: build software that actually works for businesses. Founded by Saqib Hussain, our team focuses on solving real problems with clean code and thoughtful design.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In just our first year, we have delivered over 10 projects — from e-commerce platforms and healthcare dashboards to SaaS tools and agency websites. Every project is built with the same standard: reliable, modern, and ready to scale.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are a growing team of 5+ professionals who care deeply about the work we do. We are not a massive agency — and that is our advantage. You work directly with the people who build your product.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="lg:col-span-5 bg-[#0F0D28] rounded-2xl p-8 text-white border border-white/10 glow-card shadow-xl">
              <h3 className="text-xl font-bold mb-6 tracking-wide text-cyan-400 border-b border-white/10 pb-4">Key Achievements</h3>
              <div className="space-y-6">
                {highlights.map((hl, idx) => {
                  const Icon = hl.icon;
                  return (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-400/20 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="font-extrabold text-white text-base tracking-wide">{hl.title}</p>
                        <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{hl.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-lg bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200/60 border-l-4 border-l-cyan-500">
              <h3 className="text-2xl font-bold text-navy-800 mb-4 tracking-tight">Our Mission</h3>
              <p className="text-gray-650 leading-relaxed text-sm">
                To empower businesses by delivering innovative, scalable, and sustainable technology solutions that drive growth, enhance efficiency, and create lasting value for our clients and partners.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200/60 border-l-4 border-l-cyan-500">
              <h3 className="text-2xl font-bold text-navy-800 mb-4 tracking-tight">Our Vision</h3>
              <p className="text-gray-650 leading-relaxed text-sm">
                To become a trusted technology partner recognized for transforming businesses through excellence in software development, strategic consulting, and hands-on training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="section-lg bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Our Ethics</span>
            </div>
            <h2 className="text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              The principles that guide every project and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="p-8 bg-gray-50/60 rounded-2xl border border-gray-200/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-400/20 rounded-xl flex items-center justify-center mb-5 text-cyan-500">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-lg bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Milestones</span>
            </div>
            <h2 className="text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Key milestones in our growing story.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-linear-to-b from-cyan-400 to-blue-500 opacity-20"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-1/2 px-4">
                    <div className={`bg-white p-8 rounded-2xl border border-gray-200/60 hover:shadow-md transition-all duration-300 ${index % 2 === 0 ? 'md:ml-auto md:mr-6' : 'md:mr-auto md:ml-6'}`}>
                      <div className="flex items-center space-x-2 mb-3">
                        <Calendar size={16} className="text-cyan-500" />
                        <span className="text-cyan-600 text-xs font-bold uppercase tracking-wider">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-navy-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="hidden md:flex md:w-0 justify-center relative items-center">
                    <div className="w-5 h-5 bg-white border-4 border-cyan-500 rounded-full relative z-10 shadow-sm animate-pulseGlow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
