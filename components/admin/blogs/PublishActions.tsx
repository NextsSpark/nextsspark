"use client";

import { Loader2, Save, Send } from "lucide-react";

type Props = {
  featured: boolean;
  published: boolean;

  loading?: boolean;

  createdAt?: string;
  updatedAt?: string;

  onFeaturedChange: (value: boolean) => void;
  onPublishedChange: (value: boolean) => void;

  onSaveDraft: () => void;
  onPublish: () => void;
};

export default function PublishActions({
  featured,
  published,
  loading = false,

  createdAt,
  updatedAt,

  onFeaturedChange,
  onPublishedChange,

  onSaveDraft,
  onPublish,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 space-y-6">

      <div>
        <h2 className="text-lg font-bold">
          Publish
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Manage publishing settings.
        </p>
      </div>

      {/* Featured */}

      <div className="flex items-center justify-between">

        <div>
          <p className="font-medium">
            Featured Article
          </p>

          <p className="text-sm text-gray-500">
            Show this article in featured sections.
          </p>
        </div>

        <input
          type="checkbox"
          checked={featured}
          onChange={(e) =>
            onFeaturedChange(e.target.checked)
          }
          className="h-5 w-5 accent-cyan-600"
        />

      </div>

      {/* Published */}

      <div className="flex items-center justify-between">

        <div>
          <p className="font-medium">
            Published
          </p>

          <p className="text-sm text-gray-500">
            Make this article publicly visible.
          </p>
        </div>

        <input
          type="checkbox"
          checked={published}
          onChange={(e) =>
            onPublishedChange(e.target.checked)
          }
          className="h-5 w-5 accent-cyan-600"
        />

      </div>

      {(createdAt || updatedAt) && (
        <div className="rounded-lg bg-gray-50 p-4 text-sm space-y-2">

          {createdAt && (
            <div className="flex justify-between">
              <span className="text-gray-500">
                Created
              </span>

              <span>
                {new Date(createdAt).toLocaleString()}
              </span>
            </div>
          )}

          {updatedAt && (
            <div className="flex justify-between">
              <span className="text-gray-500">
                Updated
              </span>

              <span>
                {new Date(updatedAt).toLocaleString()}
              </span>
            </div>
          )}

        </div>
      )}

      <div className="space-y-3">

        <button
          type="button"
          disabled={loading}
          onClick={onSaveDraft}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium transition hover:bg-gray-100 disabled:opacity-50"
        >
          {loading ? (
            <Loader2
              className="animate-spin"
              size={18}
            />
          ) : (
            <Save size={18} />
          )}

          Save Draft
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={onPublish}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-700 disabled:opacity-50"
        >
          {loading ? (
            <Loader2
              className="animate-spin"
              size={18}
            />
          ) : (
            <Send size={18} />
          )}

          Publish Article
        </button>

      </div>

    </div>
  );
}