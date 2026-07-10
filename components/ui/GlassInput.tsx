import { InputHTMLAttributes } from "react";

export default function GlassInput({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`
        w-full
        min-h-12
        rounded-[12px]
        border
        border-[var(--line)]
        bg-[var(--surface-strong)]
        px-4
        py-2.5
        text-[var(--ink)]
        outline-none
        placeholder:text-slate-400
        focus:border-[var(--accent)]
        focus:ring-2
        focus:ring-[var(--accent-glow)]
        shadow-[inset_0_1px_0_oklch(100%_0_0/65%)]
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    />
  );
}
