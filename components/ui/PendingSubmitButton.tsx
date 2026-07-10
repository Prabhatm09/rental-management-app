"use client";

import { useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
  pendingText?: string;
  className?: string;
};

export default function PendingSubmitButton({
  children,
  pendingText = "Saving...",
  className = "",
}: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className={`
        min-h-12
        rounded-[12px]
        electric-primary
        px-5
        py-2.5
        font-semibold
        transition duration-200
        active:translate-x-0.5
        active:translate-y-0.5
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[var(--accent)]
        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    >
      {pending ? pendingText : children}
    </button>
  );
}
