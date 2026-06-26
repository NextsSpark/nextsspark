export type BlogPayload = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  coverImagePublicId: string;
  content: string;
  category: string;
  tags: string[];
  readingTime: number;
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
  published: boolean;
};

export async function getBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export async function getBlog(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
}

export async function createBlog(data: BlogPayload) {
  const res = await fetch("/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to create blog");
  }

  return res.json();
}

export async function updateBlog(
  id: string,
  data: BlogPayload
) {
  const res = await fetch(`/api/blogs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to update blog");
  }

  return res.json();
}

export async function deleteBlog(id: string) {
  const res = await fetch(`/api/blogs/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to delete blog");
  }

  return res.json();
}
