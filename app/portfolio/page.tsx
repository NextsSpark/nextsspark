import { ExternalLink, HeartPulse, Sparkles, BriefcaseBusiness } from 'lucide-react';

const Portfolio = () => {
  const projects = [
  {
    title: 'SmartHire - Job Portal',
    category: 'Full Stack Development',
    description:
      'A comprehensive job portal that enables administrators to create and manage job listings while allowing candidates to browse opportunities and apply through an intuitive interface.',
    icon: BriefcaseBusiness, 
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://github.com/saqibhussain789',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'CareSphere - Doctor Appointment System',
    category: 'Full Stack Development',
    description:
      'A healthcare appointment management system where patients can book doctor appointments, and doctors can manage their schedules and availability efficiently.',
    icon: HeartPulse,
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    link: 'https://github.com/saqibhussain789',
    color: 'from-blue-500 to-indigo-500',
  },
];

  // const caseStudies = [
  //   {
  //     title: 'TechFlow Inc - Enterprise Cloud Migration',
  //     challenge: 'Legacy database systems unable to scale during peak trading periods, resulting in performance drops.',
  //     solution: 'Constructed an auto-scaling cluster on AWS, decoupled database replicas, and set up a Redis caching layer.',
  //     result: 'Operational efficiency increased by 40% alongside a 99.99% uptime benchmark throughout testing.',
  //   },
  //   {
  //     title: 'StartupX - Rapid MVP Development & Launch',
  //     challenge: 'Required to build, audit, and launch a complete SaaS platform prototype within a tight 90-day window.',
  //     solution: 'Deployed a modular serverless backend structure utilizing Next.js app router and Firebase integrations.',
  //     result: 'Product launched successfully ahead of schedule, enabling the team to secure $2M in seed capital.',
  //   },
  // ];

  return (
    <>
      {/* Hero Section */}
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
              Explore custom systems, mobile applications, and web platforms built by our engineering teams.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-lg bg-white relative bg-dot-pattern">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-250 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Mockup Container */}
                    <div className={`h-48 bg-linear-to-br ${project.color} flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
                      {/* Grid background overlay */}
                      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10"></div>
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md relative z-10">
                        <ProjectIcon size={28} />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 border border-cyan-100 text-[10px] font-bold uppercase rounded-full mb-4">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold text-navy-800 mb-2 tracking-tight">{project.title}</h3>
                      <p className="text-gray-600 mb-6 text-xs leading-relaxed">{project.description}</p>

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
                      className="inline-flex items-center space-x-1.5 text-cyan-600 font-bold text-sm hover:text-cyan-700 group/link"
                    >
                      <span>View Case File</span>
                      <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/* <section className="section-lg bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Metrics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">System Case Studies</h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm border-l-4 border-l-cyan-500 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-bold text-navy-800 mb-6 tracking-tight">{study.title}</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-extrabold text-navy-800 mb-2 text-xs uppercase tracking-wider">Challenge</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-navy-800 mb-2 text-xs uppercase tracking-wider">Solution</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-cyan-600 mb-2 text-xs uppercase tracking-wider">Results</h4>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                      <p className="text-gray-700 text-xs font-bold leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Portfolio;
