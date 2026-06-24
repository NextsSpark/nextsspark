import { Star, Quote, Sparkles, Award, Clock, Users, Coins, Settings, Globe } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'CEO, TechFlow Inc',
      company: 'E-Commerce Platform Development',
      rating: 5,
      content:
        'NEXTSSPARK transformed our digital vision into reality. Their team is professional, innovative, and delivers on time. The quality of work exceeded our expectations. Highly recommended!',
      initials: 'AH',
      avatarColor: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Fatima Khan',
      role: 'Founder, StartupX',
      company: 'Mobile App Development',
      rating: 5,
      content:
        'Working with NEXTSSPARK was a game-changer for our startup. They understood our vision, delivered a robust MVP in record time, and provided exceptional post-launch support.',
      initials: 'FK',
      avatarColor: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Ali Malik',
      role: 'CTO, Digital Solutions Ltd',
      company: 'Cloud Infrastructure Consulting',
      rating: 5,
      content:
        'The consulting services provided by NEXTSSPARK helped us optimize our infrastructure and reduce costs by 40%. Their expertise and dedication are unmatched in the industry.',
      initials: 'AM',
      avatarColor: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Sarah Williams',
      role: 'Product Manager, HealthTech Co',
      company: 'Healthcare App Development',
      rating: 5,
      content:
        'NEXTSSPARK delivered a HIPAA-compliant healthcare application that impressed both our team and patients. Their attention to detail and security practices were outstanding.',
      initials: 'SW',
      avatarColor: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Muhammad Ali',
      role: 'VP Engineering, Enterprise Corp',
      company: 'Enterprise CRM System',
      rating: 5,
      content:
        'The CRM system developed by NEXTSSPARK streamlined our operations and improved team productivity by 35%. Their technical expertise and customer service are exceptional.',
      initials: 'MA',
      avatarColor: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Lisa Chen',
      role: 'Director, Educational Platform',
      company: 'Learning Management System',
      rating: 5,
      content:
        'NEXTSSPARK built our LMS from scratch. The platform can handle thousands of concurrent users without any issues. Their team is highly skilled and professional.',
      initials: 'LC',
      avatarColor: 'from-cyan-500 to-teal-500',
    },
    {
      name: 'James Wilson',
      role: 'CEO, FinTech Startup',
      company: 'Payment Processing System',
      rating: 5,
      content:
        'Security was paramount for our fintech application. NEXTSSPARK implemented best practices and delivered a system that passed all security audits. Great work!',
      initials: 'JW',
      avatarColor: 'from-teal-500 to-blue-500',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Marketing Director, e-Commerce',
      company: 'Web Development & Optimization',
      rating: 5,
      content:
        'Our website redesigned by NEXTSSPARK increased conversion rates by 45% in the first month. Their team is creative, professional, and results-driven.',
      initials: 'MR',
      avatarColor: 'from-blue-600 to-cyan-500',
    },
  ];

  const stats = [
    { number: '100+', label: 'Happy Clients' },
    { number: '150+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5★', label: 'Average Rating' },
  ];

  const industries = [
    { name: 'E-Commerce', count: '28 projects' },
    { name: 'Healthcare', count: '15 projects' },
    { name: 'FinTech', count: '12 projects' },
    { name: 'Education', count: '18 projects' },
    { name: 'SaaS', count: '35 projects' },
    { name: 'Enterprise', count: '22 projects' },
  ];

  const successMetrics = [
    {
      title: 'Quality Excellence',
      description:
        'We maintain the highest quality standards in every project, ensuring your software is robust, scalable, and future-proof.',
      icon: Award,
    },
    {
      title: 'On-Time Delivery',
      description:
        'Our proven project management methodologies ensure we meet deadlines consistently without compromising quality.',
      icon: Clock,
    },
    {
      title: 'Expert Team',
      description:
        'Our team consists of certified professionals with extensive experience across various technologies and industries.',
      icon: Users,
    },
    {
      title: 'Competitive Pricing',
      description:
        'We offer flexible pricing models and packages to fit different budgets without sacrificing quality.',
      icon: Coins,
    },
    {
      title: 'Post-Launch Support',
      description:
        'We don\'t just deliver the project; we provide ongoing support, maintenance, and optimization services.',
      icon: Settings,
    },
    {
      title: '24/7 Availability',
      description:
        'Our global team ensures you have support whenever you need it, in your timezone.',
      icon: Globe,
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
              <span className="text-cyan-300 text-sm font-semibold tracking-wide">Client Testimonials</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight font-sans">What Our Clients Say</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Real success stories from founders and enterprise teams who have scaled with NEXTSSPARK.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-white relative bg-dot-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-cyan-600 mb-2 tracking-tight">{stat.number}</div>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-lg bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Client Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-250 shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <Quote size={28} className="text-cyan-500/25 mb-4" />

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-8 text-xs italic leading-relaxed">"{testimonial.content}"</p>
                </div>

                {/* Author */}
                <div className="border-t border-gray-100 pt-5">
                  <div className="flex items-center space-x-3.5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-extrabold text-sm shadow-sm flex-shrink-0`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-navy-800 text-xs tracking-wide">{testimonial.name}</p>
                      <p className="text-gray-500 text-[10px] font-semibold mt-0.5">{testimonial.role}</p>
                      <p className="text-cyan-600 text-[9px] font-bold mt-1 uppercase tracking-wider">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-lg bg-white relative bg-dot-pattern">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Domains</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Industries We Serve</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-blue-50/50 p-6 rounded-2xl text-center border border-cyan-200/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-base font-extrabold text-navy-800 mb-1 tracking-tight">{industry.name}</h3>
                <p className="text-[10px] text-gray-500 font-semibold uppercase">{industry.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-lg bg-navy-900 text-white relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl animate-pulseGlow"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-6">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold tracking-wide">Our Value Proposition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Why Clients Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left">
                  <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-400/20 rounded-xl flex items-center justify-center mb-5 text-cyan-400 shadow-sm">
                    <MetricIcon size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight text-white">{metric.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{metric.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Ready to Join Our Success Stories?</h2>
          <p className="text-base text-gray-650 mb-8 max-w-xl mx-auto leading-relaxed">
            Let's construct your application blueprint. Partner with our product engineers to scale your operations.
          </p>
          <a
            href="/contact"
            className="btn-gradient px-8 py-4 rounded-xl text-white font-extrabold text-sm tracking-wider uppercase inline-block shadow-md"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
