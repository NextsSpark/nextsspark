"use client";

import { useState } from "react";
import Image from "next/image";

type UploadResult = {
  url: string;
  publicId: string;
};

type ImageUploaderProps = {
  value?: UploadResult;
  folder?: string;
  onUpload: (image: UploadResult) => void;
};

export default function ImageUploader({
  value,
  folder = "nextsspark/blogs",
  onUpload,
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);

  async function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);

    try {
      setUploading(true);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      onUpload({
        url: data.url,
        publicId: data.publicId,
      });
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Upload failed"
      );
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">
      {value?.url && (
        <div className="relative w-full h-60 rounded-lg overflow-hidden border">
          <Image
            src={value.url}
            alt="Cover"
            fill
            className="object-cover"
          />
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      {uploading && (
        <p className="text-sm text-cyan-600">
          Uploading image...
        </p>
      )}
    </div>
  );
}