import type { Metadata } from 'next';
import { Code2, Zap, BookOpen, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | NEXTSSPARK Software Development & Consulting',
  description:
    'Explore NEXTSSPARK’s services for web development, app development, consulting, and IT training tailored to modern business growth.',
  keywords: ['web development services', 'mobile app development', 'consulting services', 'IT training services'],
  alternates: {
    canonical: 'https://nextsspark.com/services',
  },
  openGraph: {
    title: 'Services | NEXTSSPARK Software Development & Consulting',
    description: 'From custom software delivery to strategy consulting and training, see how NEXTSSPARK supports growth.',
    url: 'https://nextsspark.com/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NEXTSSPARK services' }],
  },
};

const Services = () => {
  const mainServices = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies',
      features: [
        'Web Application Development',
        'Mobile App Development (iOS & Android)',
        'Cross-Platform Solutions',
        'API Development & Integration',
        'Database Design & Optimization',
        'Cloud-Based Solutions',
        'AI/ML Integration',
        'Real-time Systems Integration',
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Flutter', 'React Native', 'AWS', 'Azure'],
      color: 'from-cyan-400 to-cyan-500',
      tagline: 'Custom Code & Scaling Architectures',
    },
    {
      icon: Zap,
      title: 'Consulting Services',
      description: 'Strategic guidance for digital transformation and enterprise scaling',
      features: [
        'Technology Audit & Assessment',
        'Digital Strategy Consulting',
        'Process Optimization & Agile',
        'Infrastructure Planning',
        'Security & Compliance Audits',
        'Performance Tuning',
        'Change Management Coaching',
        'Business Continuity planning',
      ],
      technologies: ['Best Practices', 'ITIL', 'Agile', 'Scrum', 'DevOps Pipelines', 'Cloud Architecture'],
      color: 'from-cyan-500 to-blue-400',
      tagline: 'Business & Infrastructure Strategy',
    },
    {
      icon: BookOpen,
      title: 'IT Training & Development',
      description: 'Comprehensive training programs for professional skill enhancement',
      features: [
        'Full-Stack Development Bootcamp',
        'Cloud Computing Certification Prep',
        'Data Science & Analytics Core',
        'Cybersecurity Essentials',
        'Advanced JavaScript/React Classes',
        'Mobile Development Bootcamps',
        'Corporate Team Upskilling',
        'Tailored Internship Programs',
      ],
      technologies: ['Online & Offline Classes', 'Dual-Certifications', 'Real-world Capstones', 'Job Placement Support'],
      color: 'from-blue-400 to-purple-400',
      tagline: 'Empowering Next-Gen Innovators',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We understand your goals and map out a comprehensive technical strategy.',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'We create pixel-perfect custom designs and interactive prototypes.',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'We write robust code covered by rigorous automation and QA cycles.',
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'We launch on cloud infrastructure and offer active maintenance support.',
    },
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
              <span className="text-cyan-300 text-sm font-semibold tracking-wide">Enterprise Offerings</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">Our Services</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Comprehensive technical solutions designed to power every layer of your business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-lg bg-white relative bg-dot-pattern">
        <div className="container-custom">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`mb-24 ${index !== mainServices.length - 1 ? 'pb-24' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Content (Col Span: 7) */}
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 shadow-md`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="text-cyan-600 text-xs font-bold uppercase tracking-wider block mb-2">
                      {service.tagline}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-650 leading-relaxed text-base mb-8">
                      {service.description}
                    </p>

                    <h3 className="text-sm font-extrabold text-navy-800 mb-4 tracking-wider uppercase">Key Capabilities:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle size={18} className="text-cyan-500 mt-0.5 shrink-0" />
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-3">Core Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3.5 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-100 rounded-full text-xs font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Mockup Panels (Col Span: 5) */}
                  <div className={`hidden lg:block lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`rounded-2xl p-1 shadow-xl overflow-hidden bg-linear-to-br ${service.color}`}>
                      <div className="bg-navy-900 rounded-xl text-white">
                        <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-xl">
                          <img
                            src={`/images/services/service-${index + 1}.jpg`}
                            alt={`${service.title} artwork`}
                            className="w-full h-full object-cover block"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-sm font-bold text-white mb-1">{service.title}</h4>
                          <p className="text-xs text-gray-300">{service.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-lg bg-gray-50 relative bg-dot-pattern">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Methodology</span>
            </div>
            <h2 className="text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              How we construct high-performance digital infrastructure for startups and global teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border border-gray-200/50 shadow-sm text-center h-full flex flex-col items-center justify-center hover:shadow-md transition-shadow">
                  <div className="text-4xl font-extrabold text-cyan-500 mb-4">{step.number}</div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-cyan-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-lg bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Packages</span>
            </div>
            <h2 className="text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Flexible Pricing</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Tailored development models designed to accommodate start-ups, scaleups, and legacy enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$5,000',
                description: 'Perfect for small projects & early stage MVPs',
                features: ['Up to 3 months design/dev', 'Dedicated Full Stack Developer', 'Weekly Progress Syncs', 'Basic Support Integration'],
              },
              {
                name: 'Professional',
                price: '$15,000',
                description: 'Best for scaling platforms & core products',
                features: ['Up to 6 months design/dev', 'Team of 2-3 Specialists', 'Bi-weekly Architecture Reviews', 'Priority Tech Support SLA'],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For complex multi-tier legacy systems',
                features: ['Flexible long-term iterations', 'Full Cross-Functional Team access', 'Daily Sprint standups', '24/7/365 Dedicated SLA Support'],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  plan.highlighted
                    ? 'ring-2 ring-cyan-500 shadow-xl bg-linear-to-br from-cyan-50 to-blue-50 text-navy-900 scale-105 relative'
                    : 'bg-gray-50/60 border border-gray-200 text-navy-800'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1 rounded-full shadow-sm">
                    Recommended
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold mb-1 tracking-tight">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mb-6">{plan.description}</p>
                  <div className="text-3xl font-extrabold text-cyan-600 mb-8 tracking-tight">{plan.price}</div>
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm text-gray-700">
                        <CheckCircle size={18} className="text-cyan-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className={`w-full py-3.5 rounded-xl font-extrabold text-center block text-sm transition-all ${
                    plan.highlighted
                      ? 'btn-gradient text-white shadow-md'
                      : 'bg-white border border-cyan-400 text-cyan-600 hover:bg-cyan-50'
                  }`}
                >
                  Get Started
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
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
            Let's discuss how our developers, design sprints, and IT bootcamps can enhance your internal operations.
          </p>
          <Link href="/contact" className="btn-cyan px-8 py-4 rounded-xl text-navy-900 font-extrabold text-base inline-block hover:shadow-lg transition-all">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
