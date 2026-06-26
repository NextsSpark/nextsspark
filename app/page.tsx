import Link from 'next/link';
import { ArrowRight, Code2, Zap, Shield, Users, Award, Sparkles, Cpu, Star, MapPin, Mail, Phone } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Custom solutions tailored to your business needs using latest technologies.',
      color: 'from-cyan-400 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Consulting',
      description: 'Strategic guidance to optimize your technology infrastructure and digital transformation.',
      color: 'from-cyan-500 to-blue-400',
    },
    {
      icon: Shield,
      title: 'IT Training',
      description: 'Comprehensive training programs to upskill your workforce and drive innovation.',
      color: 'from-blue-400 to-purple-400',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'CEO, TechFlow Inc',
      content:
        'NEXTSSPARK transformed our digital infrastructure. Their team is professional, innovative, and delivers on time.',
      rating: 5,
      initials: 'AH',
      avatarColor: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'Fatima Khan',
      role: 'Product Manager, StartupX',
      content: 'Working with NEXTSSPARK was a game-changer. They understood our vision and delivered beyond expectations.',
      rating: 5,
      initials: 'FK',
      avatarColor: 'from-blue-500 to-purple-500',
    },
    {
      name: 'Ali Malik',
      role: 'Director, Digital Solutions',
      content: 'Excellent service quality and dedicated support. Highly recommended for any software development needs.',
      rating: 5,
      initials: 'AM',
      avatarColor: 'from-purple-500 to-pink-500',
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: Award },
    { label: 'Happy Clients', value: '100+', icon: Users },
    { label: 'Team Members', value: '50+', icon: Cpu },
    { label: 'Years of Experience', value: '5+', icon: Shield },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-navy-900 text-white flex items-center relative overflow-hidden bg-grid-pattern-dark">
        {/* Ambient Gradient Spheres */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl animate-pulseGlow"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl animate-pulseGlow" style={{ animationDelay: '3s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fadeIn lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-6">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-cyan-300 text-sm font-semibold tracking-wide">Next Generation Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                Transform Your <br />
                <span className="gradient-text bg-linear-to-r from-white via-cyan-200 to-cyan-400">Digital Future</span>
              </h1>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                We design and engineer state-of-the-art software systems, offer strategic consulting, and provide deep IT training to scale your operations in the modern era.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-cyan px-8 py-4 rounded-xl text-navy-900 font-extrabold flex items-center justify-center space-x-2 group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border border-gray-700 bg-white/5 backdrop-blur-sm rounded-xl text-white font-extrabold hover:bg-white/10 hover:border-gray-600 transition-all text-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right Visual Code Mockup */}
            {/* Hero Image Card */}
<div className="relative group">

  {/* Glow */}
  <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition duration-700"></div>

  {/* Card */}
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] shadow-2xl">

    {/* Dashboard Image */}
    <img
      src="/images/team/Saqib.jpg"
      alt="NEXTSSPARK Dashboard"
      className="w-full h-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent"></div>

    {/* Floating Badge */}
    <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10">
      <span className="text-cyan-400 text-sm font-semibold">
        AI Powered Platform
      </span>
    </div>

    {/* Floating Stats */}
    <div className="absolute bottom-5 left-5 right-5 flex justify-between">

      <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-4 border border-white/10">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Active Clients
        </p>

        <h3 className="text-2xl font-bold text-white mt-1">
          250+
        </h3>
      </div>

      <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-4 border border-white/10">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Projects
        </p>

        <h3 className="text-2xl font-bold text-white mt-1">
          500+
        </h3>
      </div>

    </div>

  </div>

</div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-gray-800">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-400/20 rounded-xl flex items-center justify-center text-cyan-400">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
                    <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mt-0.5">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-lg bg-gray-50 relative bg-dot-pattern">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-4 tracking-tight">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Comprehensive and scalable technology packages built to drive your enterprise forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-200/60 hover:border-cyan-400 glow-card"
                >
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200 shadow-md`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-cyan-600 font-bold text-sm hover:text-cyan-700 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/services"
              className="btn-gradient px-7 py-3.5 rounded-xl text-white font-bold inline-flex items-center space-x-2 text-sm"
            >
              <span>Explore All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-lg bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-4 tracking-tight">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Leading teams around the globe trust NEXTSSPARK to architect their core platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="flex items-center space-x-1 mb-6 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 text-base italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4 border-t border-gray-100 pt-5">
                  <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-800 text-sm">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs font-semibold mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-navy-900 text-white relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl animate-pulseGlow"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
            Let's design and engineer your product with scalable technologies. Reach out today for a complimentary blueprint and quote.
          </p>
          <Link
            href="/contact"
            className="btn-cyan px-8 py-4 rounded-xl text-navy-900 font-extrabold text-base inline-block hover:shadow-lg transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section-lg bg-gray-50 relative bg-dot-pattern" id="contact">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-4 tracking-tight">Let's Build Something Great</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Have a project in mind or just want to explore possibilities? Drop us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="group p-6 bg-white rounded-2xl border border-gray-200/60 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-1">Our Office</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Lahore, Punjab<br />Pakistan</p>
                </div>
              </div>
              <div className="group p-6 bg-white rounded-2xl border border-gray-200/60 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-400 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Mail size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-1">Email Us</h4>
                  <a href="mailto:nextsspark@gmail.com" className="text-cyan-600 text-sm hover:text-cyan-700 transition-colors font-semibold">nextsspark@gmail.com</a>
                </div>
              </div>
              <div className="group p-6 bg-white rounded-2xl border border-gray-200/60 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-1">Call Us</h4>
                  <a href="tel:+923171445114" className="text-cyan-600 text-sm hover:text-cyan-700 transition-colors font-semibold">+92-317-1445114</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form className="bg-white p-8 rounded-2xl border border-gray-200/60 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-bold text-navy-800 mb-2">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-bold text-navy-800 mb-2">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-bold text-navy-800 mb-2">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Consultation / Training"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-bold text-navy-800 mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your project, goals, or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-gradient px-8 py-4 rounded-xl text-white font-extrabold text-base flex items-center justify-center space-x-2 group hover:shadow-lg transition-all"
                >
                  <span>Send Message</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
