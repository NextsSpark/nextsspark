import Link from 'next/link';
import { Briefcase, Users, FileText, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Opportunities', value: '12', icon: Briefcase, color: 'cyan' },
    { label: 'Applications', value: '48', icon: Users, color: 'cyan' },
    { label: 'Blog Posts', value: '24', icon: FileText, color: 'cyan' },
    { label: 'Growth', value: '+15%', icon: TrendingUp, color: 'cyan' },
  ];

  const cards = [
    {
      title: 'Opportunities',
      description: 'Manage jobs and internship programs',
      href: '/admin/opportunities',
      icon: Briefcase,
    },
    {
      title: 'Applications',
      description: 'Review and manage candidate applications',
      href: '/admin/applications',
      icon: Users,
    },
    {
      title: 'Blogs',
      description: 'Create and manage blog posts',
      href: '/admin/blogs',
      icon: FileText,
    },
    
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-navy-900 mb-2 tracking-tight">
          Welcome to Admin Dashboard
        </h1>
        <p className="text-gray-600">Manage your business operations and content</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-extrabold text-navy-900">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600">
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Management Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-cyan-400 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-cyan-100 to-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-100 transition-colors">
                  <Icon size={24} />
                </div>
              </div>
              <h2 className="text-xl font-extrabold text-navy-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
              <div className="mt-6 flex items-center text-cyan-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Go to {card.title}</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
