import { Check, X, ArrowRight, Sparkles, HelpCircle, Shield, Award, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects and early-stage MVPs',
      price: '$5,000',
      duration: 'Project-based delivery',
      features: [
        { name: 'Dedicated Full Stack Developer', included: true },
        { name: 'Project Duration', detail: 'Up to 3 months', included: true },
        { name: 'Weekly Progress Syncs', included: true },
        { name: 'Basic Support Integration', included: true },
        { name: 'Full Source Code Ownership', included: true },
        { name: 'Post-Launch Support', detail: '1 month', included: true },
        { name: 'Additional Team Members', included: false },
        { name: '24/7 Priority Support SLA', included: false },
      ],
      highlight: false,
    },
    {
      name: 'Professional',
      description: 'Best for scaling platforms & core company products',
      price: '$15,000',
      duration: 'Project-based delivery',
      features: [
        { name: 'Dedicated Development Team', detail: '2-3 Developers', included: true },
        { name: 'Project Duration', detail: 'Up to 6 months', included: true },
        { name: 'Bi-weekly Architecture Syncs', included: true },
        { name: 'Priority Technical Support SLA', included: true },
        { name: 'Full Source Code Ownership', included: true },
        { name: 'Post-Launch Support', detail: '3 months', included: true },
        { name: 'Additional Stack Add-ons', included: true },
        { name: '24/7 Priority Support SLA', included: false },
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      description: 'For complex, multi-tier legacy systems',
      price: 'Custom',
      duration: 'Flexible arrangement',
      features: [
        { name: 'Full Cross-Functional Team Access', included: true },
        { name: 'Project Duration', detail: '6+ months iterations', included: true },
        { name: 'Daily Standups & Reports', included: true },
        { name: '24/7 Dedicated Priority Support', included: true },
        { name: 'Full Source Code Ownership', included: true },
        { name: 'Post-Launch Support', detail: '12 months', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Custom Service Level Agreements', included: true },
      ],
      highlight: false,
    },
  ];

  const trainingPrices = [
    {
      name: 'Full-Stack Bootcamp',
      duration: '12 weeks',
      price: '$2,000',
      description: 'Complete training from web basics to advanced deployments',
      included: ['Live Interactive Sessions', 'Hands-on Production Capstone', 'Certified Job Placement Assistance', 'Lifetime Access to Course Materials'],
      icon: GraduationCap,
    },
    {
      name: 'Specialized Courses',
      duration: '4-8 weeks',
      price: '$800-1,200',
      description: 'Focused modules on target languages and AI integrations',
      included: ['Industry Expert Instructors', 'Real-world Lab Scenarios', 'Verified Course Certification', 'Direct Technical Mentorship'],
      icon: Award,
    },
    {
      name: 'Corporate Training',
      duration: 'Flexible schedule',
      price: 'Custom quote',
      description: 'Tailored technology acceleration programs for business units',
      included: ['On-site or Remote Sprints', 'Customized Curriculum logs', 'Corporate Team Certifications', 'Internal Progress Dashboards'],
      icon: Shield,
    },
  ];

  const faqs = [
    {
      q: 'Can we customize the pricing packages?',
      a: 'Absolutely! We understand every startup and product is unique. Contact us for a custom blueprint and a tailored quote based on your specific requirements.',
    },
    {
      q: 'Do you offer payment plans?',
      a: 'Yes, we can arrange milestone-based payment schedules for larger projects. Typically, we use a 50% initiation and 50% release breakdown, but details are flexible.',
    },
    {
      q: 'What if the project takes longer than estimated?',
      a: 'We operate in structured Agile sprints with transparent progress logs. If scope creep or requirements shift, we align on adjustments before billing changes.',
    },
    {
      q: 'Is support included after project completion?',
      a: 'Yes, post-launch QA and security support are included for a specified period on all plans. Extended long-term maintenance contracts are also available.',
    },
    {
      q: 'Do you offer discounts for long-term engagements?',
      a: 'Yes, we offer custom monthly retainer models and special rate packages for partnerships exceeding 12 months.',
    },
    {
      q: 'Are there any hidden licensing or delivery fees?',
      a: 'No. All costs are detailed in our initial proposals. Any extra third-party costs (API fees, host costs) are charged directly to your billing account.',
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
              <span className="text-cyan-300 text-sm font-semibold tracking-wide">Financial Tiers</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">Transparent Pricing</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Flexible engineering and training investment plans. Clean delivery with zero hidden overheads.
            </p>
          </div>
        </div>
      </section>

      {/* Development Services Pricing */}
      <section className="section-lg bg-white relative bg-dot-pattern">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Dev Rates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Development Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl transition-all duration-300 flex flex-col justify-between p-8 border ${
                  plan.highlight
                    ? 'ring-2 ring-cyan-500 shadow-xl bg-linear-to-br from-cyan-50 to-blue-50/50 border-cyan-300 scale-105 z-10'
                    : 'bg-white border-gray-250 hover:shadow-lg'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-1 tracking-tight">{plan.name}</h3>
                  <p className="text-gray-500 text-xs mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="text-3xl font-extrabold text-cyan-600 mb-1 tracking-tight">{plan.price}</div>
                    <p className="text-gray-400 text-xs font-semibold uppercase">{plan.duration}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full py-3.5 rounded-xl font-extrabold text-center block mb-8 text-xs tracking-wider uppercase transition-all ${
                      plan.highlight
                        ? 'btn-gradient text-white shadow-md'
                        : 'border border-cyan-400 text-cyan-600 bg-white hover:bg-cyan-50'
                    }`}
                  >
                    Get Started
                  </Link>

                  <div className="space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs">
                        {feature.included ? (
                          <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                        ) : (
                          <X size={16} className="text-gray-300 shrink-0 mt-0.5" />
                        )}
                        <div className={feature.included ? 'text-gray-700 font-semibold' : 'text-gray-400'}>
                          <span>{feature.name}</span>
                          {feature.detail && <span className="text-[10px] text-gray-500 font-normal"> ({feature.detail})</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Pricing */}
      <section className="section-lg bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Education Rates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Training Programs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPrices.map((training, index) => {
              const TrainingIcon = training.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-400/20 rounded-xl flex items-center justify-center mb-5 text-cyan-600 shadow-sm">
                      <TrainingIcon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-800 mb-1 tracking-tight">{training.name}</h3>
                    <p className="text-gray-500 text-xs mb-4 leading-relaxed">{training.description}</p>

                    <div className="mb-6">
                      <div className="text-2xl font-extrabold text-cyan-600 mb-1 tracking-tight">{training.price}</div>
                      <p className="text-gray-400 text-[10px] font-bold uppercase">Duration: {training.duration}</p>
                    </div>

                    <ul className="space-y-3.5 mb-8">
                      {training.included.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-xs text-gray-700">
                          <Check size={16} className="text-cyan-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full py-3.5 rounded-xl font-extrabold text-center block bg-cyan-600 text-white hover:bg-cyan-700 text-xs tracking-wider uppercase transition-colors shadow-sm"
                  >
                    Enroll Now
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compare Features */}
      <section className="section-lg bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Comparison Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">What's Included</h2>
          </div>

          <div className="bg-gray-50/50 rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-250 bg-gray-50">
                    <th className="text-left p-4.5 font-bold text-navy-800 text-sm">Feature</th>
                    <th className="text-center p-4.5 font-bold text-navy-800 text-sm">Starter</th>
                    <th className="text-center p-4.5 font-bold text-navy-850 text-sm bg-cyan-50/70">Professional</th>
                    <th className="text-center p-4.5 font-bold text-navy-800 text-sm">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Development Team Access', starter: true, pro: true, ent: true },
                    { feature: 'Code Review & Dedicated QA', starter: true, pro: true, ent: true },
                    { feature: 'Cloud Deployment Hosting Setup', starter: true, pro: true, ent: true },
                    { feature: 'Custom API Documentation', starter: true, pro: true, ent: true },
                    { feature: 'Security & Integrity Auditing', starter: false, pro: true, ent: true },
                    { feature: 'Advanced Load Tuning & Optimize', starter: false, pro: true, ent: true },
                    { feature: 'Dedicated Business Account lead', starter: false, pro: false, ent: true },
                    { feature: 'Custom Third-Party Integrations', starter: false, pro: false, ent: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-200/60 hover:bg-gray-100/40 transition-colors">
                      <td className="p-4.5 font-bold text-gray-700 text-xs">{row.feature}</td>
                      <td className="text-center p-4.5">
                        {row.starter ? <Check size={16} className="text-green-500 mx-auto" /> : <X size={16} className="text-gray-300 mx-auto" />}
                      </td>
                      <td className="text-center p-4.5 bg-cyan-50/40">
                        {row.pro ? <Check size={16} className="text-green-500 mx-auto" /> : <X size={16} className="text-gray-300 mx-auto" />}
                      </td>
                      <td className="text-center p-4.5">
                        {row.ent ? <Check size={16} className="text-green-500 mx-auto" /> : <X size={16} className="text-gray-300 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-lg bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Pricing FAQ</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3 text-left">
                  <HelpCircle size={18} className="text-cyan-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-navy-800 mb-2 tracking-tight">{faq.q}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg bg-navy-900 text-white relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl animate-pulseGlow"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
            Let's organize a project roadmap. Reach out to schedule a technical blueprint review.
          </p>
          <Link
            href="/contact"
            className="btn-cyan px-8 py-4 rounded-xl text-navy-900 font-extrabold text-base inline-flex items-center space-x-2 group hover:shadow-lg transition-all"
          >
            <span>Schedule Consultation</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Pricing;
