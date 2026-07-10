"use client";

import { ReactNode } from "react";

interface Props {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function GlassModal({
  open,
  title,
  onClose,
  children,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/30 p-3 backdrop-blur-sm sm:items-center">
      <div className="electric-panel max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-[20px] p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-black text-[var(--ink)]">{title}</h2>

          <button
            onClick={onClose}
            className="grid size-9 place-items-center rounded-[12px] border border-[var(--line)] bg-[var(--surface-strong)] text-xl text-[var(--muted)] hover:text-[var(--ink)]"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
