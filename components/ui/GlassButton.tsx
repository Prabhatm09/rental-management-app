import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function GlassButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`primary-btn hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}