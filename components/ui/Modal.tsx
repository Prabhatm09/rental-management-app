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
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/20 p-3 backdrop-blur-sm sm:items-center">
      <div className="max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250)] p-5 shadow-2xl sm:p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-950">{title}</h2>

          <button
            onClick={onClose}
            className="grid size-10 place-items-center rounded-full border border-[oklch(88%_0.04_247)] text-2xl text-slate-500 hover:text-slate-950"
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
