import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";

export const editorExtensions = [
  StarterKit,

  Underline,

  Highlight,

  Link.configure({
    openOnClick: false,
    autolink: true,
    linkOnPaste: true,
  }),

  Image,

  Placeholder.configure({
    placeholder: "Start writing your article...",
  }),

  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];