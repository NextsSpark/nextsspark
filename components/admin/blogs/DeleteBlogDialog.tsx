"use client";

import { Loader2, Trash2, X } from "lucide-react";

type Props = {
  open: boolean;
  blogTitle: string;
  loading?: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export default function DeleteBlogDialog({
  open,
  blogTitle,
  loading = false,
  onClose,
  onDelete,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-lg font-bold text-red-600">
            Delete Blog
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4 p-5">
          <p className="text-gray-700">
            Are you sure you want to delete
          </p>

          <p className="font-semibold">
            "{blogTitle}"
          </p>

          <p className="text-sm text-red-500">
            This action cannot be undone.
          </p>
        </div>

        <div className="flex justify-end gap-3 border-t p-5">

          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <Trash2 size={18} />
            )}

            Delete
          </button>

        </div>

      </div>
    </div>
  );
}