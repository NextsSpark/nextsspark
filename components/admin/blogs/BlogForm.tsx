"use client";

import { useMemo, useState } from "react";

import BlogEditor from "./editor/BlogEditor";
import BlogImageUploader from "./BlogImageUploader";
import TagsInput from "./TagsInput";
import SlugField from "./SlugField";
import SeoSection from "./SeoSection";
import PublishActions from "./PublishActions";
import { useRouter } from "next/navigation";
import { createBlog, updateBlog } from "@/lib/blogs";

type BlogFormProps = {
  initialData?: any;
};

export default function BlogForm({
  initialData,
}: BlogFormProps) {
  const [title, setTitle] = useState(
    initialData?.title || ""
  );

  const [slug, setSlug] = useState(
    initialData?.slug || ""
  );

  const [excerpt, setExcerpt] = useState(
    initialData?.excerpt || ""
  );

  const [category, setCategory] = useState(
    initialData?.category || "Technology"
  );

  const [coverImage, setCoverImage] = useState(
    initialData?.coverImage || ""
  );

  const [coverImagePublicId, setCoverImagePublicId] =
    useState(initialData?.coverImagePublicId || "");

  const [content, setContent] = useState(
    initialData?.content || ""
  );

  const [tags, setTags] = useState<string[]>(
    initialData?.tags || []
  );

  const [featured, setFeatured] = useState(
    initialData?.featured || false
  );

  const [published, setPublished] = useState(
    initialData?.published || false
  );

  const [seoTitle, setSeoTitle] = useState(
    initialData?.seoTitle || ""
  );

  const [seoDescription, setSeoDescription] =
    useState(initialData?.seoDescription || "");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const readingTime = useMemo(() => {
    const words = content
      .replace(/<[^>]+>/g, "")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    return Math.max(1, Math.ceil(words / 200));
  }, [content]);

  async function handleSaveDraft() {
  try {
    setLoading(true);
    if (!title.trim()) {
  alert("Please enter a title.");
  return;
}

if (!slug.trim()) {
  alert("Please enter a slug.");
  return;
}

if (!coverImage) {
  alert("Please upload a cover image.");
  return;
}

if (!content.trim()) {
  alert("Please write the blog content.");
  return;
}

    const payload = {
      title,
      slug,
      excerpt,
      coverImage,
      coverImagePublicId,
      content,
      category,
      tags,
      readingTime,
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || excerpt,
      featured,
      published: false,
    };

    if (initialData?._id) {
      await updateBlog(initialData._id, payload);
    } else {
      await createBlog(payload);
    }

    router.push("/admin/blogs");
    router.refresh();
  } catch (error) {
    console.error(error);
    alert("Unable to save draft.");
  } finally {
    setLoading(false);
  }
}

  async function handlePublish() {
  try {
    setLoading(true);

    const payload = {
      title,
      slug,
      excerpt,
      coverImage,
      coverImagePublicId,
      content,
      category,
      tags,
      readingTime,
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || excerpt,
      featured,
      published: true,
    };

    if (initialData?._id) {
      await updateBlog(initialData._id, payload);
    } else {
      await createBlog(payload);
    }

    router.push("/admin/blogs");
    router.refresh();
  } catch (error) {
    console.error(error);
    alert("Unable to publish blog.");
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

      {/* LEFT */}

      <div className="xl:col-span-2 space-y-8">

        {/* Title */}

        <div className="rounded-xl border bg-white p-6">

          <label className="font-semibold">
            Blog Title
          </label>

          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Enter blog title..."
            className="mt-2 w-full rounded-lg border px-4 py-3 text-lg"
          />

        </div>

        {/* Slug */}

        <div className="rounded-xl border bg-white p-6">

          <SlugField
            title={title}
            slug={slug}
            onChange={setSlug}
          />

        </div>

        {/* Excerpt */}

        <div className="rounded-xl border bg-white p-6">

          <label className="font-semibold">
            Excerpt
          </label>

          <textarea
            rows={5}
            value={excerpt}
            onChange={(e) =>
              setExcerpt(e.target.value)
            }
            placeholder="Short summary..."
            className="mt-2 w-full rounded-lg border px-4 py-3"
          />

        </div>

        {/* Cover */}

        <div className="rounded-xl border bg-white p-6">

          <BlogImageUploader
            value={coverImage}
            onChange={(url, publicId) => {
              setCoverImage(url);
              setCoverImagePublicId(publicId);
            }}
          />

        </div>

        {/* Category */}

        <div className="rounded-xl border bg-white p-6">

          <label className="font-semibold">
            Category
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="mt-2 w-full rounded-lg border px-4 py-3"
          >
            <option>Technology</option>
            <option>Web Development</option>
            <option>Artificial Intelligence</option>
            <option>Business</option>
            <option>Career</option>
            <option>Company News</option>
          </select>

        </div>

        {/* Tags */}

        <div className="rounded-xl border bg-white p-6">

          <TagsInput
            value={tags}
            onChange={setTags}
          />

        </div>

        {/* Editor */}

        <div className="rounded-xl border bg-white p-6">

          <label className="font-semibold mb-4 block">
            Content
          </label>

          <BlogEditor
            content={content}
            onChange={setContent}
          />

        </div>

      </div>

      {/* RIGHT SIDEBAR */}

      <div className="space-y-8">

        <div className="rounded-xl border bg-white p-6">

          <h3 className="font-bold mb-4">
            Article Statistics
          </h3>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Reading Time</span>
              <span>{readingTime} min</span>
            </div>

            <div className="flex justify-between">
              <span>Tags</span>
              <span>{tags.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Title</span>
              <span>{title.length} chars</span>
            </div>

            <div className="flex justify-between">
              <span>Excerpt</span>
              <span>{excerpt.length} chars</span>
            </div>

          </div>

        </div>

        <SeoSection
          seoTitle={seoTitle}
          seoDescription={seoDescription}
          slug={slug}
          onSeoTitleChange={setSeoTitle}
          onSeoDescriptionChange={setSeoDescription}
        />

        <PublishActions
          featured={featured}
          published={published}
          loading={loading}
          createdAt={initialData?.createdAt}
          updatedAt={initialData?.updatedAt}
          onFeaturedChange={setFeatured}
          onPublishedChange={setPublished}
          onSaveDraft={handleSaveDraft}
          onPublish={handlePublish}
        />

      </div>

    </div>
  );
}