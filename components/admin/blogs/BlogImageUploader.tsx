"use client";

import { useRef, useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import Image from "next/image";

type Props = {
  value?: string;
  onChange: (url: string, publicId: string) => void;
};

export default function BlogImageUploader({
  value,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    try {
      setUploading(true);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("folder", "nextsspark/blogs/covers");

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      onChange(data.url, data.publicId);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">

      <label className="block font-semibold">
        Cover Image
      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition hover:border-cyan-500 hover:bg-cyan-50"
      >
        {value ? (
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={value}
              alt="Cover"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            {uploading ? (
              <Loader2
                className="animate-spin text-cyan-600"
                size={42}
              />
            ) : (
              <>
                <ImagePlus
                  className="text-gray-400"
                  size={42}
                />

                <p className="mt-4 font-semibold">
                  Upload Cover Image
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  JPG, PNG or WebP
                </p>
              </>
            )}
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (!file) return;

          upload(file);
        }}
      />

    </div>
  );
}