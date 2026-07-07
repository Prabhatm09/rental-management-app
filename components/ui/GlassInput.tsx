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
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        py-3
        text-white
        outline-none
        placeholder:text-white/40
        focus:border-indigo-500
        focus:ring-2
        focus:ring-indigo-500/30
        ${className}
      `}
    />
  );
}