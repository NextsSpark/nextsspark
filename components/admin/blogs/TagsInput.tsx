"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Props = {
  value: string[];
  onChange: (tags: string[]) => void;
  maxTags?: number;
};

export default function TagsInput({
  value,
  onChange,
  maxTags = 10,
}: Props) {
  const [input, setInput] = useState("");

  function addTag() {
    const tag = input.trim();

    if (!tag) return;

    if (value.includes(tag)) {
      setInput("");
      return;
    }

    if (value.length >= maxTags) return;

    onChange([...value, tag]);

    setInput("");
  }

  function removeTag(tag: string) {
    onChange(value.filter((t) => t !== tag));
  }

  return (
    <div className="space-y-3">

      <label className="block font-semibold">
        Tags
      </label>

      <div className="rounded-xl border p-3">

        <div className="flex flex-wrap gap-2 mb-3">

          {value.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700"
            >
              <span>{tag}</span>

              <button
                type="button"
                onClick={() => removeTag(tag)}
              >
                <X size={14} />
              </button>
            </div>
          ))}

        </div>

        <input
          value={input}
          placeholder="Press Enter to add tag"
          className="w-full outline-none"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag();
            }
          }}
        />

      </div>

      <p className="text-sm text-gray-500">
        {value.length}/{maxTags} tags
      </p>

    </div>
  );
}