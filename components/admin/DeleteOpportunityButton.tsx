"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function DeleteOpportunityButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  async function handleDelete() {
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
        throw new Error();
      }

      router.refresh();
    } catch {
      alert("Failed to delete opportunity");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="flex items-center justify-center space-x-1 px-3 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors font-medium text-sm"
    >
      <Trash2 size={16} />
      <span>Delete</span>
    </button>
  );
}