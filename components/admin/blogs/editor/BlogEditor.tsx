"use client";

import { EditorContent, useEditor } from "@tiptap/react";

import { editorExtensions } from "./extensions";
import EditorToolbar from "./EditorToolbar";

import "./editor.css";

type Props = {
  content: string;
  onChange: (value: string) => void;
};

export default function BlogEditor({
  content,
  onChange,
}: Props) {
  const editor = useEditor({
    extensions: editorExtensions,

    content,

    immediatelyRender: false,

    editorProps: {
      attributes: {
        class:
          "ProseMirror focus:outline-none min-h-[500px] p-8",
      },
    },

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <EditorToolbar editor={editor} />

      <EditorContent editor={editor} />
    </div>
  );
}