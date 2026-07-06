import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function GlassInput({
  className = "",
  ...props
}: Props) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-xl
        border
        border-white/20
        bg-white/10
        px-4
        py-3
        text-white
        placeholder:text-gray-300
        outline-none
        backdrop-blur-md
        focus:border-blue-400
        ${className}
      `}
    />
  );
}