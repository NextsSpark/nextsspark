'use client';

import { Sparkles, CheckCircle2, TrendingUp, Users2, Scale } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Team = () => {

  // ─── Dummy team members — replace image/name/role when team grows ───────────
  const teamMembers = [
    {
      name: 'Aqib Hussain',
      role: 'Lead Developer',
      image: '/images/team/Aqib.jpg',
      expertise: ['React', 'Node.js', 'TypeScript'],
      socials: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      name: 'Fazal Ur Rahman',
      role: 'AI Engineer',
      image: '/images/team/fazal_1.jpg',
      expertise: ['Figma', 'Branding', 'Prototyping'],
      socials: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      name: 'Waqar Hussain Shah',
      role: 'Backend Engineer',
      image: '/images/team/Saqib.jpg',
      expertise: ['Python', 'PostgreSQL', 'AWS'],
      socials: { linkedin: '#', twitter: '#', github: '#' },
    },
    // {
    //   name: 'Kashif Manzoor',
    //   role: 'Mobile App Developer',
    //   image: '/images/team/Saqib.jpg',
    //   expertise: ['React Native', 'Flutter', 'iOS'],
    //   socials: { linkedin: '#', twitter: '#', github: '#' },
    // },
    // {
    //   name: 'Mubeen Jaffar',
    //   role: 'Social Media Manager',
    //   image: '/images/team/Saqib.jpg',
    //   expertise: ['Docker', 'Kubernetes', 'CI/CD'],
    //   socials: { linkedin: '#', twitter: '#', github: '#' },
    // },
    // {
    //   name: 'Hammad Khalid',
    //   role: 'Mobile App Developer',
    //   image: '/images/team/Saqib.jpg',
    //   expertise: ['Testing', 'Automation', 'Quality'],
    //   socials: { linkedin: '#', twitter: '#', github: '#' },
    // },
  ];

  const visionPoints = [
    'Building world-class digital products that solve real problems.',
    'Empowering businesses through cutting-edge technology and innovation.',
    'Creating a culture where great ideas turn into great software.',
    'Committed to excellence, transparency, and client success.',
  ];

  const culture = [
    {
      title: 'Collaborate & Innovate',
      description: 'We believe in the power of teamwork and continuous innovation to solve complex problems.',
      icon: Users2,
    },
    {
      title: 'Growth Mindset',
      description: "We invest in our team's development through training, mentoring, and career advancement.",
      icon: TrendingUp,
    },
    {
      title: 'Work-Life Balance',
      description: "We value our team's well-being and offer flexible work arrangements and wellness programs.",
      icon: Scale,
    },
  ];

  const avatarGradients = [
    'from-cyan-500 to-blue-600',
    'from-purple-500 to-pink-500',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-rose-500',
    'from-indigo-500 to-violet-600',
    'from-amber-500 to-orange-600',
  ];

  return (
    <>
      <section className="bg-navy-900 text-white py-24 relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl animate-pulseGlow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-6">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-cyan-300 text-sm font-semibold tracking-wide">The People Behind NextsSpark</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">Meet Our Team</h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            A growing team of passionate developers and entrepreneurs building the future of digital solutions.
          </p>
        </div>
      </section>

      <section className="section-lg bg-white relative bg-dot-pattern">
        <div className="container-custom">

          {/* Label */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Founder & CEO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight">The Visionary</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-14">

            <div className="shrink-0 w-full lg:w-90">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 ring-4 ring-cyan-100 h-105">
                <img
                  src="/images/team/Saqib.jpg"
                  alt="Saqib Hassain — CEO & Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-extrabold text-navy-800 mb-1 tracking-tight">Saqib Hassain</h3>
              <p className="text-cyan-600 text-sm font-bold uppercase tracking-widest mb-6">CEO & Founder</p>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Visionary leader with deep expertise in software development and business strategy.
                Passionate about building high-performance digital solutions that help businesses grow
                and stand out in a competitive market.
              </p>

              <div className="space-y-3 mb-8">
                {visionPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-cyan-500 shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Leadership', 'Strategy', 'Full-Stack Development'].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-100 text-xs rounded-full font-bold">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/saqib-hussain-developer/" className="text-gray-400 hover:text-cyan-500 hover:scale-110 transition-all"><FaLinkedin size={22} /></a>
                <a href="#" className="text-gray-400 hover:text-cyan-500 hover:scale-110 transition-all"><FaTwitter size={22} /></a>
                <a href="https://github.com/saqibhussain789" className="text-gray-400 hover:text-cyan-500 hover:scale-110 transition-all"><FaGithub size={22} /></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Team Members Grid ─────────────────────────────────────────── */}
      <section className="section-lg bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Engineers & Creators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Our Team</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">A talented group of individuals working together to deliver exceptional digital solutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo area */}
                  <div className={`h-52 bg-linear-to-br ${avatarGradients[index % avatarGradients.length]} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-10" />
                    <img
                      src={member.image}
                      alt={`Photo of ${member.name}`}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-800 mb-0.5 tracking-tight">{member.name}</h3>
                    <p className="text-cyan-600 text-[10px] font-bold mb-4 uppercase tracking-wider">{member.role}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-cyan-50 text-cyan-700 border border-cyan-100 text-[10px] rounded-full font-bold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="px-6 py-4 flex space-x-3 border-t border-gray-100">
                  <a href={member.socials.linkedin} className="text-gray-400 hover:text-cyan-500 hover:scale-105 transition-all"><FaLinkedin size={17} /></a>
                  <a href={member.socials.twitter} className="text-gray-400 hover:text-cyan-500 hover:scale-105 transition-all"><FaTwitter size={17} /></a>
                  <a href={member.socials.github} className="text-gray-400 hover:text-cyan-500 hover:scale-105 transition-all"><FaGithub size={17} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture ───────────────────────────────────────────────────── */}
      <section className="section-lg bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Vibe</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Our Culture</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culture.map((value, index) => {
              const CultureIcon = value.icon;
              return (
                <div key={index} className="bg-linear-to-br from-cyan-50 to-blue-50/50 p-8 rounded-2xl border border-cyan-200 shadow-sm flex flex-col items-start text-left">
                  <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-400/20 rounded-xl flex items-center justify-center mb-5 text-cyan-600 shadow-sm">
                    <CultureIcon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-3 tracking-tight">{value.title}</h3>
                  <p className="text-gray-700 text-xs leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
