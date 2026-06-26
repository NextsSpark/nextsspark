import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock3,
  Share2,
  Tag,
  User,
} from "lucide-react";
import {
  getPublishedBlogBySlug,
  getPublishedBlogs,
} from "@/lib/blogQueries";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

function formatDate(value?: string | null) {
  if (!value) return "Recently published";

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found - NEXTSSPARK",
    };
  }

  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.excerpt,
    openGraph: {
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      type: "article",
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getPublishedBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = (await getPublishedBlogs())
    .filter((item) => item._id !== blog._id)
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white bg-grid-pattern-dark">
        <div className="absolute inset-x-0 top-12 mx-auto h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="container-custom relative z-10 px-4 pb-16 pt-12">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">
              <Tag size={14} className="text-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                {blog.category}
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              {blog.title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
              {blog.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-semibold text-gray-400">
              <span className="flex items-center gap-2">
                <User size={16} className="text-cyan-400" />
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-cyan-400" />
                {formatDate(blog.publishedAt)}
              </span>
              <span className="flex items-center gap-2">
                <Clock3 size={16} className="text-cyan-400" />
                {blog.readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container-custom px-4">
          <div className="relative -mt-10 overflow-hidden rounded-2xl border border-white/60 bg-navy-900 shadow-2xl">
            <div className="relative aspect-[16/7] min-h-[280px]">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg bg-white">
        <div className="container-custom grid gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article
            className="blog-content max-w-3xl text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-lg font-extrabold text-navy-900">
                Article Details
              </h2>
              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Author
                  </p>
                  <p className="mt-1 font-semibold text-navy-900">
                    {blog.author}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Published
                  </p>
                  <p className="mt-1 font-semibold text-navy-900">
                    {formatDate(blog.publishedAt)}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Reading Time
                  </p>
                  <p className="mt-1 font-semibold text-navy-900">
                    {blog.readingTime} minutes
                  </p>
                </div>
              </div>
            </div>

            {blog.tags.length > 0 && (
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-extrabold text-navy-900">
                  Tags
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-cyan-700"
            >
              <Share2 size={16} />
              Discuss This Topic
            </Link>
          </aside>
        </div>
      </section>

      {relatedBlogs.length > 0 && (
        <section className="section-lg bg-gray-50 bg-dot-pattern">
          <div className="container-custom px-4">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                Keep Reading
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-navy-900">
                Related Articles
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedBlogs.map((item) => (
                <Link
                  key={item._id}
                  href={`/blog/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold leading-snug text-navy-900 group-hover:text-cyan-600">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
