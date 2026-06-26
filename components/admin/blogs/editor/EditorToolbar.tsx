"use client";

import { useState } from "react";
import { Editor } from "@tiptap/react";

import {
  Bold,
  Italic,
  Underline,
  Highlighter,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  ListChecks,
  Quote,
  Code2,
  Minus,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Table2,
  Link2,
  Unlink,
} from "lucide-react";

import ToolbarButton from "./ToolbarButton";
import ImageUploadButton from "./ImageUploadButton";
import LinkDialog from "./LinkDialog";

type Props = {
  editor: Editor;
};

export default function EditorToolbar({ editor }: Props) {
  const [showLinkDialog, setShowLinkDialog] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 border-b bg-gray-50 p-3">

        {/* Text */}

        <ToolbarButton
          title="Bold"
          active={editor.isActive("bold")}
          onClick={() =>
            editor.chain().focus().toggleBold().run()
          }
        >
          <Bold size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Italic"
          active={editor.isActive("italic")}
          onClick={() =>
            editor.chain().focus().toggleItalic().run()
          }
        >
          <Italic size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Underline"
          active={editor.isActive("underline")}
          onClick={() =>
            editor.chain().focus().toggleUnderline().run()
          }
        >
          <Underline size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Highlight"
          active={editor.isActive("highlight")}
          onClick={() =>
            editor.chain().focus().toggleHighlight().run()
          }
        >
          <Highlighter size={18} />
        </ToolbarButton>

        <div className="h-6 w-px bg-gray-300" />

        {/* Headings */}

        <ToolbarButton
          title="Heading 1"
          active={editor.isActive("heading", { level: 1 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1 size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Heading 2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Heading 3"
          active={editor.isActive("heading", { level: 3 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <Heading3 size={18} />
        </ToolbarButton>

        <div className="h-6 w-px bg-gray-300" />

        {/* Lists */}

        <ToolbarButton
          title="Bullet List"
          active={editor.isActive("bulletList")}
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          <List size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Ordered List"
          active={editor.isActive("orderedList")}
          onClick={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        >
          <ListOrdered size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Task List"
          active={editor.isActive("taskList")}
          onClick={() =>
            editor.chain().focus().toggleTaskList().run()
          }
        >
          <ListChecks size={18} />
        </ToolbarButton>

        <div className="h-6 w-px bg-gray-300" />

        {/* Blocks */}

        <ToolbarButton
          title="Quote"
          active={editor.isActive("blockquote")}
          onClick={() =>
            editor.chain().focus().toggleBlockquote().run()
          }
        >
          <Quote size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Code Block"
          active={editor.isActive("codeBlock")}
          onClick={() =>
            editor.chain().focus().toggleCodeBlock().run()
          }
        >
          <Code2 size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Horizontal Rule"
          onClick={() =>
            editor.chain().focus().setHorizontalRule().run()
          }
        >
          <Minus size={18} />
        </ToolbarButton>

        <div className="h-6 w-px bg-gray-300" />

        {/* Alignment */}

        <ToolbarButton
          title="Align Left"
          onClick={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
        >
          <AlignLeft size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Align Center"
          onClick={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
        >
          <AlignCenter size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Align Right"
          onClick={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
        >
          <AlignRight size={18} />
        </ToolbarButton>

        <div className="h-6 w-px bg-gray-300" />

        {/* Table */}

        <ToolbarButton
          title="Insert Table"
          onClick={() =>
            (editor.chain().focus() as any).insertTable({
              rows: 3,
              cols: 3,
              withHeaderRow: true,
            }).run()
          }
        >
          <Table2 size={18} />
        </ToolbarButton>

        <div className="h-6 w-px bg-gray-300" />

        {/* Link */}

        <ToolbarButton
          title="Insert Link"
          onClick={() => setShowLinkDialog(true)}
        >
          <Link2 size={18} />
        </ToolbarButton>

        <ToolbarButton
          title="Remove Link"
          onClick={() =>
            editor.chain().focus().unsetLink().run()
          }
        >
          <Unlink size={18} />
        </ToolbarButton>

        {/* Image */}

        <ImageUploadButton
          onUploaded={(image) => {
            editor
              .chain()
              .focus()
              .setImage({
                src: image.url,
                alt: image.alt,
              })
              .run();
          }}
        />

        <div className="ml-auto flex gap-2">

          <ToolbarButton
            title="Undo"
            onClick={() =>
              editor.chain().focus().undo().run()
            }
          >
            <Undo size={18} />
          </ToolbarButton>

          <ToolbarButton
            title="Redo"
            onClick={() =>
              editor.chain().focus().redo().run()
            }
          >
            <Redo size={18} />
          </ToolbarButton>

        </div>
      </div>

      <LinkDialog
        open={showLinkDialog}
        onClose={() => setShowLinkDialog(false)}
        onSubmit={(url) => {
          editor
            .chain()
            .focus()
            .setLink({
              href: url,
            })
            .run();
        }}
      />
    </>
  );
}