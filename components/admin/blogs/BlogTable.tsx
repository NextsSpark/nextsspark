"use client";

import BlogRow from "./BlogRow";

type Props = {
  blogs: any[];
  onDelete: (blog: any) => void;
};

export default function BlogTable({
  blogs,
  onDelete,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="min-w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="p-4 text-left">
              Image
            </th>

            <th className="p-4 text-left">
              Blog
            </th>

            <th className="p-4 text-left">
              Category
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Featured
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {blogs.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="p-10 text-center text-gray-500"
              >
                No blogs found.
              </td>
            </tr>
          ) : (
            blogs.map((blog) => (
              <BlogRow
                key={blog._id}
                blog={blog}
                onDelete={onDelete}
              />
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}