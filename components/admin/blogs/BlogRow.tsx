"use client";

import Link from "next/link";
import { Edit, Trash2, Star } from "lucide-react";
import BlogStatusBadge from "./BlogStatusBadge";

type Props = {
  blog: any;
  onDelete: (blog: any) => void;
};

export default function BlogRow({
  blog,
  onDelete,
}: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="h-16 w-24 rounded-lg object-cover"
        />
      </td>

      <td className="p-4">

        <h3 className="font-semibold">
          {blog.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {blog.readingTime} min read
        </p>

      </td>

      <td className="p-4">
        {blog.category}
      </td>

      <td className="p-4">
        <BlogStatusBadge
          published={blog.published}
        />
      </td>

      <td className="p-4">
        {blog.featured ? (
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ) : (
          "-"
        )}
      </td>

      <td className="p-4">

        <div className="flex gap-2">

          <Link
            href={`/admin/blogs/${blog._id}/edit`}
            className="rounded-lg bg-blue-100 p-2 text-blue-600"
          >
            <Edit size={18} />
          </Link>

          <button
            onClick={() => onDelete(blog)}
            className="rounded-lg bg-red-100 p-2 text-red-600"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>
  );
}