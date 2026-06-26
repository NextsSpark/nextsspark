import { getAllBlogs } from "@/lib/blogQueries";
import BlogsPage from "@/components/admin/blogs/BlogsPage";

export default async function Page() {
  const blogs = await getAllBlogs();

  return <BlogsPage initialBlogs={blogs} />;
}
