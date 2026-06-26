"use client";

import { useRef, useState } from "react";
import { ImagePlus } from "lucide-react";
import ToolbarButton from "./ToolbarButton";

type Props = {
  folder?: string;
  onUploaded: (image: {
    url: string;
    publicId: string;
    alt: string;
  }) => void;
};

export default function ImageUploadButton({
  folder = "nextsspark/blogs/content",
  onUploaded,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function handleUpload(file: File) {
    try {
      setUploading(true);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("folder", folder);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      onUploaded({
        url: data.url,
        publicId: data.publicId,
        alt: file.name,
      });
    } catch (error) {
      console.error(error);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    handleUpload(file);

    e.target.value = "";
  }

  return (
    <>
      <ToolbarButton
        title="Insert Image"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
      >
        <ImagePlus size={18} />
      </ToolbarButton>

      <input
        ref={inputRef}
        type="file"
        hidden
        accept="image/*"
        onChange={handleChange}
      />
    </>
  );
}