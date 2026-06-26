"use client";

import { ReactNode } from "react";

type ToolbarButtonProps = {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title?: string;
  children: ReactNode;
};

export default function ToolbarButton({
  onClick,
  active = false,
  disabled = false,
  title,
  children,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`
        flex h-9 w-9 items-center justify-center
        rounded-lg border transition-all duration-200
        ${
          active
            ? "bg-cyan-600 border-cyan-600 text-white"
            : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
}