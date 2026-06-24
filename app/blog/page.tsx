import { ArrowRight, Calendar, User, Tag, Sparkles, Terminal, TrendingUp, Cpu, Smartphone, Lock, Layers } from 'lucide-react';
import Link from 'next/link';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping web development, from AI integration to edge computing.',
      author: 'Ahmed Hassan',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Technology',
      icon: Terminal,
      color: 'from-cyan-500 to-blue-500',
      slug: 'future-web-development-2024',
    },
    {
      id: 2,
      title: 'Why Your Business Needs Digital Transformation Now',
      excerpt: 'Digital transformation is no longer optional. Learn why it\'s crucial for business survival.',
      author: 'Dr. Fatima Khan',
      date: 'March 12, 2024',
      readTime: '7 min read',
      category: 'Business',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-500',
      slug: 'digital-transformation-importance',
    },
    {
      id: 3,
      title: 'React vs Vue: Which Framework Should You Choose?',
      excerpt: 'A comprehensive comparison of React and Vue to help you make an informed decision.',
      author: 'Ahmed Hassan',
      date: 'March 10, 2024',
      readTime: '8 min read',
      category: 'Development',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      slug: 'react-vs-vue-comparison',
    },
    {
      id: 4,
      title: 'Best Practices for Mobile App Development',
      excerpt: 'Learn the industry best practices for building secure and performant mobile applications.',
      author: 'Ali Khan',
      date: 'March 8, 2024',
      readTime: '6 min read',
      category: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      slug: 'mobile-app-best-practices',
    },
    {
      id: 5,
      title: 'Cloud Security: Protecting Your Data in the Cloud',
      excerpt: 'Essential security practices for protecting your applications and data in cloud environments.',
      author: 'Dr. Fatima Khan',
      date: 'March 5, 2024',
      readTime: '9 min read',
      category: 'Security',
      icon: Lock,
      color: 'from-pink-500 to-rose-500',
      slug: 'cloud-security-guide',
    },
    {
      id: 6,
      title: 'Agile Development: Accelerating Time to Market',
      excerpt: 'How Agile methodology can help your team deliver faster without compromising quality.',
      author: 'Saqib Hassain',
      date: 'March 1, 2024',
      readTime: '6 min read',
      category: 'Methodology',
      icon: Layers,
      color: 'from-cyan-500 to-teal-500',
      slug: 'agile-development-guide',
    },
  ];

  const categories = ['All', 'Technology', 'Business', 'Development', 'Mobile', 'Security', 'Methodology'];

  const FeaturedIcon = articles[0].icon;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-24 relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl animate-pulseGlow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-6">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold tracking-wide">Industry Insights</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">Blog & Insights</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Stay updated with the latest trends, tips, and architectural paradigms from our engineering teams.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-lg bg-white relative bg-dot-pattern">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide uppercase transition-all duration-200 ${
                  index === 0
                    ? 'bg-cyan-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-20 bg-navy-900 rounded-2xl overflow-hidden text-white border border-white/10 glow-card shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-12 items-center">
              {/* Featured Visual */}
              <div className="lg:col-span-5 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-10"></div>
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
                  <FeaturedIcon size={28} />
                </div>
              </div>

              {/* Featured text info */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-4 w-fit">
                  <Sparkles size={12} className="text-cyan-400" />
                  <span className="text-cyan-300 text-[10px] font-bold uppercase tracking-wider">Featured Article</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight leading-snug">
                  {articles[0].title}
                </h2>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{articles[0].excerpt}</p>
                <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 mb-8 border-t border-white/5 pt-4">
                  <div className="flex items-center space-x-2 font-semibold">
                    <User size={14} className="text-cyan-400" />
                    <span>{articles[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2 font-semibold">
                    <Calendar size={14} className="text-cyan-400" />
                    <span>{articles[0].date} • {articles[0].readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${articles[0].slug}`}
                  className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-navy-900 px-5 py-3 rounded-xl font-bold w-fit text-xs tracking-wider uppercase transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <h3 className="text-2xl font-bold text-navy-800 mb-8 tracking-tight">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => {
              const ArticleIcon = article.icon;
              return (
                <div
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-250 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Panel */}
                    <div className={`h-44 bg-gradient-to-br ${article.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10"></div>
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md relative z-10">
                        <ArticleIcon size={24} />
                      </div>
                    </div>

                    <div className="p-6 text-left">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag size={12} className="text-cyan-500" />
                        <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded uppercase">
                          {article.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-navy-800 mb-2 hover:text-cyan-600 tracking-tight leading-snug">
                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                      </h3>

                      <p className="text-gray-600 text-xs leading-relaxed mb-4">{article.excerpt}</p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 text-left">
                    <div className="space-y-1.5 text-[10px] text-gray-500 border-t border-gray-100 pt-4 mb-5">
                      <div className="flex items-center space-x-2 font-semibold">
                        <User size={12} className="text-cyan-600" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 font-semibold">
                        <Calendar size={12} className="text-cyan-600" />
                        <span>{article.date} • {article.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center text-cyan-600 font-bold text-xs tracking-wider uppercase group/link"
                    >
                      <span>Read More</span>
                      <ArrowRight size={14} className="ml-1.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-lg bg-gray-50">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4 tracking-tight">Subscribe to Our Newsletter</h2>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            Get the latest articles, design insights, and architecture tips delivered to your inbox every week.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
            <button
              type="submit"
              className="btn-gradient px-7 py-3 rounded-xl text-white font-bold text-sm tracking-wide transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Blog;
