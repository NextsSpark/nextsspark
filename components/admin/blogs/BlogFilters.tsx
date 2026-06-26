"use client";

type Props = {
  status: string;
  category: string;

  onStatusChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
};

const categories = [
  "All",
  "Technology",
  "Web Development",
  "Artificial Intelligence",
  "Business",
  "Career",
  "Company News",
];

export default function BlogFilters({
  status,
  category,
  onStatusChange,
  onCategoryChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row">

      {/* Status */}

      <div className="flex-1">

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Status
        </label>

        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
        >
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>

      </div>

      {/* Category */}

      <div className="flex-1">

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
        >
          {categories.map((item) => (
            <option
              key={item}
              value={item === "All" ? "all" : item}
            >
              {item}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}