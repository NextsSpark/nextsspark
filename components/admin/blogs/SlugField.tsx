"use client";

import { useEffect } from "react";

type Props = {
  title: string;
  slug: string;
  onChange: (slug: string) => void;
};

function generateSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function SlugField({
  title,
  slug,
  onChange,
}: Props) {
  useEffect(() => {
    if (!slug && title) {
      onChange(generateSlug(title));
    }
  }, [title]);

  return (
    <div className="space-y-2">

      <label className="block font-semibold">
        Slug
      </label>

      <input
        type="text"
        value={slug}
        onChange={(e) =>
          onChange(generateSlug(e.target.value))
        }
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
        placeholder="blog-post-slug"
      />

      <p className="text-sm text-gray-500">
        URL Preview:
      </p>

      <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm break-all">
        https://nextsspark.com/blog/{slug || "your-blog-slug"}
      </div>

    </div>
  );
}