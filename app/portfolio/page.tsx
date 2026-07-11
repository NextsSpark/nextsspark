import type { Metadata } from 'next';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio | NEXTSSPARK Featured Projects & Case Studies',
  description:
    'Explore NEXTSSPARK’s featured projects spanning web platforms, health-tech products, and business software built for growth.',
  keywords: ['portfolio', 'featured projects', 'case studies', 'web development portfolio', 'software projects'],
  alternates: {
    canonical: 'https://nextsspark.com/portfolio',
  },
  openGraph: {
    title: 'Portfolio | NEXTSSPARK Featured Projects & Case Studies',
    description: 'See how NEXTSSPARK creates modern software experiences for startups and growing businesses.',
    url: 'https://nextsspark.com/portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NEXTSSPARK portfolio' }],
  },
};

const Portfolio = () => {
  const projects = [
    {
      title: 'Bestel Two',
      category: 'E-commerce & Retail',
      description:
        'A polished multi-vendor commerce experience with modern product discovery, conversion-focused UX, and scalable integrations.',
      image: '/Bestel.png',
      technologies: ['Next.js', 'React', 'Stripe', 'CMS'],
      link: 'https://bestel-two.vercel.app',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Parwaz Digital',
      category: 'Digital Agency',
      description:
        'A high-performance marketing and lead-generation platform designed to showcase services and streamline client conversion.',
      image: '/ParwazDigital.png',
      technologies: ['Next.js', 'Tailwind CSS', 'SEO', 'Analytics'],
      link: 'https://parwazdigital.com',
      color: 'from-slate-700 to-slate-900',
    },
    {
      title: 'Parwaz Mailer',
      category: 'SaaS Product',
      description:
        'An engaging email campaign platform built to simplify outreach, automate workflows, and provide clear reporting insights.',
      image: '/ParwazMailer.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Email APIs'],
      link: 'https://parwaz-mailer.vercel.app',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'ePharmaView',
      category: 'Healthcare',
      description:
        'A healthcare data and pharmacy visibility dashboard created to improve access to medicine information and operational clarity.',
      image: '/ePharmaView.png',
      technologies: ['Next.js', 'Dashboard UI', 'API Integrations', 'Role Access'],
      link: 'https://epharmaview.vercel.app',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'E-Health Sync',
      category: 'Health Tech',
      description:
        'A secure digital health platform that supported patient engagement and operational visibility for modern care teams.',
      image: '/EhealthSYNC.jpg',
      technologies: ['React', 'Node.js', 'Cloud APIs', 'Security'],
      link: 'https://e-health-sync-web.vercel.app',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Gray Medical Supplies',
      category: 'Medical Commerce',
      description:
        'A streamlined medical product storefront focused on product presentation, trust signals, and improved online ordering flows.',
      image: '/Graymedical.png',
      technologies: ['Next.js', 'E-commerce', 'Inventory', 'Payments'],
      link: 'https://graymedicalsupplies.vercel.app',
      color: 'from-rose-500 to-orange-500',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'NEXTSSPARK Portfolio',
    description: 'Featured software projects and digital experiences built by NEXTSSPARK.',
    url: 'https://nextsspark.com/portfolio',
    publisher: {
      '@type': 'Organization',
      name: 'NEXTSSPARK',
      logo: 'https://nextsspark.com/og-image.png',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.title,
        url: project.link,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="bg-navy-900 text-white py-24 relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl animate-pulseGlow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-6">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold tracking-wide">Case Studies & Projects</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">Our Portfolio</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Explore a selection of featured web experiences, SaaS products, and digital platforms built by our team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-lg bg-white relative bg-dot-pattern">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-250 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`h-52 bg-gradient-to-br ${project.color} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-grid-pattern-dark opacity-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 border border-cyan-100 text-[10px] font-bold uppercase rounded-full mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-navy-800 mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">Stack Elements</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="text-[10px] bg-gray-100 text-gray-700 font-semibold px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-cyan-600 font-bold text-sm hover:text-cyan-700 group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Ready to Build</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Let’s Create Something Great</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We can turn your next idea into a polished product with a clear roadmap, strong engineering, and measurable business impact.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
