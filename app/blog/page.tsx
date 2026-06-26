import Image from "next/image";
import { ArrowRight, Calendar, User, Tag, Sparkles, Terminal, TrendingUp, Cpu, Smartphone, Lock, Layers, Search, Clock3 } from 'lucide-react';
import Link from 'next/link';
import { getPublishedBlogs } from "@/lib/blogQueries";

export const dynamic = "force-dynamic";

function formatDate(value?: string | null) {
  if (!value) return "Recently published";

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

const Blog = async () => {
  const blogs = await getPublishedBlogs();
  const featuredBlog = blogs.find((blog) => blog.featured) ?? blogs[0];
  const latestBlogs = featuredBlog
    ? blogs.filter((blog) => blog._id !== featuredBlog._id)
    : blogs;
  const blogCategories = Array.from(
    new Set(blogs.map((blog) => blog.category).filter(Boolean))
  );

  return (
    <>
      <section className="bg-navy-900 text-white py-24 relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute inset-x-0 top-12 mx-auto h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="container-custom relative z-10 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-sm font-semibold tracking-wide text-cyan-300">
                NEXTSSPARK Insights
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Blog & Insights
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              Practical engineering, business automation, and digital
              transformation ideas from the NEXTSSPARK team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-lg bg-gray-50 bg-dot-pattern">
        <div className="container-custom px-4">
          <div className="mb-12 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="search"
                placeholder="Explore our latest articles"
                className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-sm font-medium shadow-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                readOnly
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                All
              </span>
              {blogCategories.slice(0, 5).map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-600"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {blogs.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-sm">
              <h2 className="text-2xl font-extrabold text-navy-900">
                No published articles yet
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-gray-600">
                Blogs Not Available Yet
              </p>
            </div>
          ) : (
            <>
              {featuredBlog && (
                <article className="mb-16 overflow-hidden rounded-2xl border border-white/10 bg-navy-900 text-white shadow-xl">
                  <div className="grid gap-0 lg:grid-cols-12">
                    <Link
                      href={`/blog/${featuredBlog.slug}`}
                      className="relative min-h-[320px] lg:col-span-5"
                    >
                      <Image
                        src={featuredBlog.coverImage}
                        alt={featuredBlog.title}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-navy-900/80 via-transparent to-transparent" />
                    </Link>

                    <div className="p-8 lg:col-span-7 lg:p-12">
                      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1">
                        <Sparkles size={13} className="text-cyan-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                          Featured Article
                        </span>
                      </div>

                      <Link href={`/blog/${featuredBlog.slug}`}>
                        <h2 className="text-3xl font-extrabold tracking-tight transition hover:text-cyan-300 lg:text-4xl">
                          {featuredBlog.title}
                        </h2>
                      </Link>

                      <p className="mt-5 text-base leading-relaxed text-gray-300">
                        {featuredBlog.excerpt}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-4 text-xs font-semibold text-gray-400">
                        <span className="flex items-center gap-2">
                          <User size={14} className="text-cyan-400" />
                          {featuredBlog.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={14} className="text-cyan-400" />
                          {formatDate(featuredBlog.publishedAt)}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock3 size={14} className="text-cyan-400" />
                          {featuredBlog.readingTime} min read
                        </span>
                      </div>

                      <Link
                        href={`/blog/${featuredBlog.slug}`}
                        className="mt-9 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-extrabold text-navy-900 transition hover:bg-cyan-400"
                      >
                        Read Article
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              )}

              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                    Latest Articles
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900">
                    Fresh From The Team
                  </h2>
                </div>
                <p className="hidden text-sm font-medium text-gray-500 sm:block">
                  {blogs.length} published articles
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {latestBlogs.map((blog) => (
                  <article
                    key={blog._id}
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
                  >
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden bg-navy-900"
                    >
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </Link>

                    <div className="p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <Tag size={13} className="text-cyan-600" />
                        <span className="rounded-full bg-cyan-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-cyan-700">
                          {blog.category}
                        </span>
                      </div>

                      <Link href={`/blog/${blog.slug}`}>
                        <h3 className="text-xl font-extrabold leading-snug tracking-tight text-navy-900 transition group-hover:text-cyan-600">
                          {blog.title}
                        </h3>
                      </Link>

                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                        {blog.excerpt}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-100 pt-5 text-xs font-semibold text-gray-500">
                        <span>{formatDate(blog.publishedAt)}</span>
                        <span>{blog.readingTime} min read</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );

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
              <div className="lg:col-span-5 h-64 bg-linear-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center relative overflow-hidden shrink-0">
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
                    <div className={`h-44 bg-linear-to-br ${article.color} flex items-center justify-center relative overflow-hidden`}>
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
