"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditOpportunityPage() {
  const router = useRouter();
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("job");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    fetchOpportunity();
  }, []);

  async function fetchOpportunity() {
    try {
      const response = await fetch(
        `/api/opportunities/${params.id}`
      );

      const data = await response.json();

      setTitle(data.title || "");
      setCategory(data.category || "job");
      setDescription(data.description || "");
      setSkills(
        data.skills?.join(", ") || ""
      );
    } catch (error) {
      setError("Failed to load opportunity");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      const response = await fetch(
        `/api/opportunities/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            title,
            category,
            description,
            skills: skills
              .split(",")
              .map((skill) => skill.trim())
              .filter(Boolean),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Failed to update opportunity"
        );
      }

      router.push(
        "/admin/opportunities"
      );

      router.refresh();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">
        Edit Opportunity
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border rounded p-3"
          required
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="w-full border rounded p-3"
        >
          <option value="job">
            Job
          </option>

          <option value="internship">
            Internship
          </option>
        </select>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full border rounded p-3"
          rows={5}
          required
        />

        <input
          type="text"
          value={skills}
          onChange={(e) =>
            setSkills(e.target.value)
          }
          className="w-full border rounded p-3"
        />

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={saving}
          className="border rounded px-6 py-3"
        >
          {saving
            ? "Updating..."
            : "Update Opportunity"}
        </button>
      </form>
    </div>
  );
}