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
        rounded-[16px]
        border
        border-[oklch(88%_0.04_247)]
        bg-[oklch(99%_0.006_250/0.92)]
        px-4
        py-3
        text-slate-950
        outline-none
        placeholder:text-slate-400
        focus:border-[#2563EB]
        focus:ring-2
        focus:ring-[oklch(82%_0.12_252/45%)]
        shadow-[inset_0_1px_0_oklch(100%_0_0/65%)]
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    />
  );
}
