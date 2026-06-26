import { notFound } from "next/navigation";
import BlogForm from "@/components/admin/blogs/BlogForm";
import { getBlogById } from "@/lib/blogQueries";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditBlogPage({ params }: Props) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-900">
          Edit Blog
        </h1>
        <p className="mt-2 text-gray-500">
          Update article content, SEO, and publishing settings.
        </p>
      </div>

      <BlogForm initialData={blog} />
    </div>
  );
}
