import { ButtonHTMLAttributes } from "react";

export default function GlassButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`
        rounded-xl
        bg-indigo-600
        px-5
        py-3
        font-semibold
        text-white
        transition-all
        hover:bg-indigo-700
        hover:scale-[1.02]
        active:scale-95
        ${className}
      `}
    />
  );
}