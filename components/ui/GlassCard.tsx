import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-[28px]
        border border-[var(--line)]
        bg-[var(--surface)]
        p-5
        shadow-[0_18px_48px_oklch(38%_0.12_252/10%)]
        backdrop-blur-xl
        sm:p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}
