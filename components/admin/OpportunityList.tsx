"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OpportunityList({
  opportunities,
}: {
  opportunities: any[];
}) {
  const router = useRouter();

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this opportunity?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/opportunities/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      router.refresh();
    } catch (error) {
      alert("Failed to delete opportunity");
    }
  }

  return (
    <div className="space-y-4">
      {opportunities.map((opportunity) => (
        <div
          key={opportunity._id}
          className="border rounded-lg p-4"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg">
                {opportunity.title}
              </h2>

              <p className="text-sm text-gray-500">
                {opportunity.category}
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/admin/opportunities/${opportunity._id}/edit`}
                className="border px-3 py-1 rounded"
              >
                Edit
              </Link>

              <button
                onClick={() =>
                  handleDelete(opportunity._id)
                }
                className="border px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}