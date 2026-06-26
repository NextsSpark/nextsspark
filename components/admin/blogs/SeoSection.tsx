"use client";

type Props = {
  seoTitle: string;
  seoDescription: string;
  slug: string;
  onSeoTitleChange: (value: string) => void;
  onSeoDescriptionChange: (value: string) => void;
};

export default function SeoSection({
  seoTitle,
  seoDescription,
  slug,
  onSeoTitleChange,
  onSeoDescriptionChange,
}: Props) {
  const titleLength = seoTitle.length;
  const descriptionLength = seoDescription.length;

  return (
    <div className="rounded-xl border bg-white p-6 space-y-6">

      <div>
        <h2 className="text-xl font-bold">
          SEO Settings
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Optimize how your article appears in search engines.
        </p>
      </div>

      {/* SEO Title */}

      <div className="space-y-2">

        <label className="font-semibold">
          SEO Title
        </label>

        <input
          value={seoTitle}
          onChange={(e) =>
            onSeoTitleChange(e.target.value)
          }
          className="w-full rounded-lg border px-4 py-2"
          placeholder="SEO Title"
          maxLength={60}
        />

        <div className="flex justify-between text-sm">

          <span className="text-gray-500">
            Recommended: 50–60 characters
          </span>

          <span
            className={`font-medium ${
              titleLength > 60
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            {titleLength}/60
          </span>

        </div>

      </div>

      {/* Description */}

      <div className="space-y-2">

        <label className="font-semibold">
          Meta Description
        </label>

        <textarea
          rows={4}
          value={seoDescription}
          onChange={(e) =>
            onSeoDescriptionChange(e.target.value)
          }
          className="w-full rounded-lg border px-4 py-2"
          placeholder="Meta description..."
          maxLength={160}
        />

        <div className="flex justify-between text-sm">

          <span className="text-gray-500">
            Recommended: 140–160 characters
          </span>

          <span
            className={`font-medium ${
              descriptionLength > 160
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            {descriptionLength}/160
          </span>

        </div>

      </div>

      {/* Google Preview */}

      <div className="rounded-lg border bg-gray-50 p-5">

        <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
          Google Search Preview
        </p>

        <h3 className="text-blue-700 text-xl font-medium leading-snug">
          {seoTitle || "Your SEO Title"}
        </h3>

        <p className="text-green-700 text-sm mt-1 break-all">
          https://nextsspark.com/blog/{slug || "your-slug"}
        </p>

        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          {seoDescription ||
            "Your meta description will appear here. Keep it concise and compelling to improve click-through rates."}
        </p>

      </div>

    </div>
  );
}