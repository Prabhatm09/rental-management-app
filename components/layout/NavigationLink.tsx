"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  icon: LucideIcon;
  compact?: boolean;
};

export default function NavigationLink({
  href,
  children,
  icon: Icon,
  compact = false,
}: Props) {
  const pathname = usePathname();
  const [pendingHref, setPendingHref] = useState<
    string | null
  >(null);
  const active = pathname === href;
  const pending =
    pendingHref !== null && pendingHref !== pathname;

  return (
    <>
      {pending && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/25 backdrop-blur-sm">
          <div className="electric-loader">
            Loading page...
          </div>
        </div>
      )}

      <Link
        href={href}
        aria-disabled={pending}
        onClick={(event) => {
          if (active || pending) {
            event.preventDefault();
            return;
          }

          setPendingHref(href);
        }}
        className={`group flex items-center transition ${
          compact
            ? "min-h-12 flex-col justify-center gap-1 rounded-[14px] px-1 py-2 text-[10px] font-bold"
            : "gap-3 rounded-[12px] px-3 py-2.5 text-sm font-bold"
        } ${
          active
            ? "electric-primary text-white"
            : "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--accent)]"
        } ${
          pending
            ? "pointer-events-none cursor-not-allowed opacity-60"
            : ""
        }`}
      >
        <Icon
          aria-hidden="true"
          className={compact ? "size-5" : "size-5"}
          strokeWidth={2.4}
        />
        <span>{children}</span>
      </Link>
    </>
  );
}
