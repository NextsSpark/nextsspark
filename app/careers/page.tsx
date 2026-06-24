import { Briefcase, MapPin, DollarSign, ArrowRight, Coins, HeartPulse, GraduationCap, Clock, Compass, PartyPopper, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      salary: '$4,000 - $6,000',
      experience: '3+ years',
      description: 'We\'re looking for an experienced React developer to lead frontend architectures and guide feature cycles.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Node.js Backend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$3,500 - $5,500',
      experience: '2+ years',
      description: 'Build scalable backend systems, manage API endpoints, and direct DevOps deployments.',
      skills: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    },
    {
      id: 3,
      title: 'Mobile App Developer (Flutter)',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Full-time',
      salary: '$3,000 - $5,000',
      experience: '2+ years',
      description: 'Develop and scale high-performance cross-platform mobile apps for iOS and Android environments.',
      skills: ['Flutter', 'Dart', 'Firebase', 'iOS/Android'],
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      salary: '$2,500 - $4,000',
      experience: '2+ years',
      description: 'Design intuitive wireframes, brand identity guides, and high-fidelity custom website mockups.',
      skills: ['Figma', 'UI Design', 'User Research', 'Prototyping'],
    },
    {
      id: 5,
      title: 'QA Engineer',
      department: 'QA & Testing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$2,000 - $3,500',
      experience: '1+ years',
      description: 'Validate system integrity and reliability using rigorous manual audits and automated test cases.',
      skills: ['Manual Testing', 'Automation', 'Selenium', 'CI/CD'],
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$4,000 - $6,500',
      experience: '3+ years',
      description: 'Orchestrate server infrastructure, CI/CD automated tracks, and Kubernetes container arrays.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
    },
  ];

  const internshipPrograms = [
    {
      title: 'Full-Stack Development Internship',
      duration: '3 months',
      stipend: '$300/month',
      description: 'Learn full-stack architectures through live production features, standups, and developer mentorship.',
      skills: ['React', 'Node.js', 'MongoDB', 'Git'],
    },
    {
      title: 'Mobile Development Internship',
      duration: '3 months',
      stipend: '$300/month',
      description: 'Formulate hybrid apps, inspect layout flows, and learn mobile build release processes.',
      skills: ['Flutter', 'React Native', 'Firebase', 'State Systems'],
    },
    {
      title: 'UI/UX Design Internship',
      duration: '3 months',
      stipend: '$300/month',
      description: 'Craft mockups, build custom UI design libraries, and learn responsive desktop/mobile paradigms.',
      skills: ['Figma', 'Design Systems', 'Layouts', 'Prototyping'],
    },
    {
      title: 'DevOps Internship',
      duration: '3 months',
      stipend: '$300/month',
      description: 'Learn cloud deployments, script auto-builds, and audit site security setups.',
      skills: ['AWS', 'Docker', 'Linux Core', 'CI/CD Pipelines'],
    },
  ];

  const benefits = [
    { icon: Coins, title: 'Competitive Salary', description: 'Industry-leading compensation packages tied to performance.' },
    { icon: HeartPulse, title: 'Health Insurance', description: 'Comprehensive health coverage for you and your dependents.' },
    { icon: GraduationCap, title: 'Learning Budget', description: 'Annual stipends for certifications, events, and bootcamps.' },
    { icon: Clock, title: 'Work-Life Balance', description: 'Flexible core working hours, hybrid options, and paid off-days.' },
    { icon: Compass, title: 'Career Growth', description: 'Clear technical & management pathways with direct coaching logs.' },
    { icon: PartyPopper, title: 'Team Outings', description: 'Regular company dinners, retreats, and annual developer jams.' },
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
              <span className="text-cyan-300 text-sm font-semibold tracking-wide">Build Your Future</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">Join Our Team</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Work alongside a world-class team of engineers and designers crafting the digital products of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-lg bg-white relative bg-dot-pattern">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Perks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Why Work With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="p-8 bg-gray-50/60 rounded-2xl border border-gray-200/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-400/20 rounded-xl flex items-center justify-center mb-5 text-cyan-600 shadow-sm">
                    <BenefitIcon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2 tracking-tight">{benefit.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-lg bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Vacancies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Open Positions</h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4">
                    <h3 className="text-lg font-bold text-navy-800 mb-1 group-hover:text-cyan-600 tracking-tight transition-colors">
                      {job.title}
                    </h3>
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 border border-gray-200 text-[10px] font-bold uppercase rounded-full">
                      {job.department}
                    </span>
                  </div>

                  <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                    <div className="flex items-center space-x-2 text-gray-700 font-semibold">
                      <MapPin size={14} className="text-cyan-500 shrink-0" />
                      <span className="text-xs">{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700 font-semibold">
                      <Briefcase size={14} className="text-cyan-500 shrink-0" />
                      <span className="text-xs">{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700 font-semibold">
                      <DollarSign size={14} className="text-cyan-500 shrink-0" />
                      <span className="text-xs">{job.salary}</span>
                    </div>
                    <div className="text-right">
                      <Link
                        href={`/contact?position=${job.id}`}
                        className="btn-cyan px-4 py-2 text-navy-900 rounded-xl text-xs font-extrabold tracking-wide uppercase inline-flex items-center space-x-1 group/btn"
                      >
                        <span>Apply</span>
                        <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="text-[10px] bg-cyan-50 text-cyan-700 border border-cyan-100 px-2 py-0.5 rounded-full font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="section-lg bg-white relative bg-dot-pattern">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Academics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Internship Programs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="bg-linear-to-br from-cyan-50 to-blue-50/50 p-8 rounded-2xl border-2 border-cyan-200/60 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-navy-800 mb-4 tracking-tight leading-snug">{program.title}</h3>

                  <div className="space-y-2.5 mb-6 text-xs text-gray-700 border-b border-cyan-200/50 pb-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-500 uppercase text-[9px] tracking-wider">Duration</span>
                      <span className="font-bold text-navy-800 bg-cyan-100/50 border border-cyan-200/50 px-2 py-0.5 rounded-full">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-500 uppercase text-[9px] tracking-wider">Stipend</span>
                      <span className="font-bold text-cyan-600">{program.stipend}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed mb-6">{program.description}</p>

                  <div className="mb-8">
                    <p className="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-2">Curriculum Topics</p>
                    <div className="flex flex-wrap gap-1.5">
                      {program.skills.map((skill, idx) => (
                        <span key={idx} className="text-[9px] bg-white text-navy-850 px-2.5 py-1 rounded border border-cyan-300/60 font-semibold shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block text-center bg-cyan-600 text-white py-3 rounded-xl font-extrabold text-xs tracking-wider uppercase hover:bg-cyan-700 transition-colors shadow-sm"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg bg-navy-900 text-white relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl animate-pulseGlow"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Ready to Make an Impact?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
            Take the next step in your career trajectory. Upload your qualifications and chat with our hiring leads.
          </p>
          <Link
            href="/contact"
            className="btn-cyan px-8 py-4 rounded-xl text-navy-900 font-extrabold text-base inline-block hover:shadow-lg transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default Careers;
