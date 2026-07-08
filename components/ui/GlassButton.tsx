import { ButtonHTMLAttributes } from "react";

export default function GlassButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`
        min-h-12
        rounded-[16px]
        bg-[#2563EB]
        px-5
        py-3
        font-semibold
        text-white
        shadow-[5px_5px_0_#F7C948]
        transition duration-200
        hover:bg-blue-700
        active:translate-x-0.5
        active:translate-y-0.5
        active:shadow-[2px_2px_0_#F7C948]
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#2563EB]
        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    />
  );
}
