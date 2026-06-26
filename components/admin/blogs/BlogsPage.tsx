"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, FileText, CheckCircle2, Clock3, Star } from "lucide-react";

import SearchBar from "./SearchBar";
import BlogFilters from "./BlogFilters";
import BlogTable from "./BlogTable";
import Pagination from "./Pagination";
import DeleteBlogDialog from "./DeleteBlogDialog";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
  published: boolean;
  createdAt?: string;
};

type Props = {
  initialBlogs: Blog[];
};

const PAGE_SIZE = 10;

export default function BlogsPage({
  initialBlogs,
}: Props) {
  const router = useRouter();

  const [blogs, setBlogs] = useState(initialBlogs);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [category, setCategory] = useState("all");

  const [page, setPage] = useState(1);

  const [selectedBlog, setSelectedBlog] =
    useState<Blog | null>(null);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        blog.category
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all"
          ? true
          : status === "published"
          ? blog.published
          : !blog.published;

      const matchesCategory =
        category === "all"
          ? true
          : blog.category === category;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory
      );
    });
  }, [blogs, search, status, category]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredBlogs.length / PAGE_SIZE)
  );

  const paginatedBlogs = filteredBlogs.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  async function handleDelete() {
    if (!selectedBlog) return;

    try {
      setDeleteLoading(true);

      const res = await fetch(
        `/api/blogs/${selectedBlog._id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      setBlogs((prev) =>
        prev.filter(
          (blog) =>
            blog._id !== selectedBlog._id
        )
      );

      setSelectedBlog(null);

      router.refresh();
    } catch {
      alert("Failed to delete blog.");
    } finally {
      setDeleteLoading(false);
    }
  }

  const totalBlogs = blogs.length;

  const publishedBlogs = blogs.filter(
    (b) => b.published
  ).length;

  const draftBlogs = blogs.filter(
    (b) => !b.published
  ).length;

  const featuredBlogs = blogs.filter(
    (b) => b.featured
  ).length;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Blogs
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your blog articles.
          </p>

        </div>

        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 font-medium text-white transition hover:bg-cyan-700"
        >
          <Plus size={18} />
          New Blog
        </Link>

      </div>

      {/* Stats */}

      <div className="grid gap-4 md:grid-cols-4">

        <StatCard
          title="Total Blogs"
          value={totalBlogs}
          icon={<FileText size={22} />}
        />

        <StatCard
          title="Published"
          value={publishedBlogs}
          icon={<CheckCircle2 size={22} />}
        />

        <StatCard
          title="Drafts"
          value={draftBlogs}
          icon={<Clock3 size={22} />}
        />

        <StatCard
          title="Featured"
          value={featuredBlogs}
          icon={<Star size={22} />}
        />

      </div>

      {/* Search */}

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search blogs..."
      />

      {/* Filters */}

      <BlogFilters
        status={status}
        category={category}
        onStatusChange={(value) => {
          setStatus(value);
          setPage(1);
        }}
        onCategoryChange={(value) => {
          setCategory(value);
          setPage(1);
        }}
      />

      {/* Table */}

      <BlogTable
        blogs={paginatedBlogs}
        onDelete={setSelectedBlog}
      />

      {/* Pagination */}

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      {/* Delete */}

      <DeleteBlogDialog
        open={!!selectedBlog}
        blogTitle={selectedBlog?.title ?? ""}
        loading={deleteLoading}
        onClose={() => setSelectedBlog(null)}
        onDelete={handleDelete}
      />

    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>

        </div>

        <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
          {icon}
        </div>

      </div>

    </div>
  );
}