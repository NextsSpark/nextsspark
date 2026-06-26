"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  initialValue?: string;
  onClose: () => void;
  onSubmit: (url: string) => void;
};

export default function LinkDialog({
  open,
  initialValue = "",
  onClose,
  onSubmit,
}: Props) {
  const [url, setUrl] = useState(initialValue);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

        <div className="border-b p-5">
          <h2 className="text-lg font-semibold">
            Insert Link
          </h2>
        </div>

        <div className="p-5">

          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
          />

        </div>

        <div className="flex justify-end gap-3 border-t p-5">

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => {
              onSubmit(url);
              onClose();
            }}
            className="rounded-lg bg-cyan-600 px-4 py-2 text-white"
          >
            Insert
          </button>

        </div>

      </div>

    </div>
  );
}