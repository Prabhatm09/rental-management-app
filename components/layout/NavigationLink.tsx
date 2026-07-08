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
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/20 backdrop-blur-sm">
          <div className="border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250)] px-5 py-4 text-sm font-bold text-slate-950 shadow-2xl">
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
            ? "min-h-14 flex-col justify-center gap-1 rounded-[18px] px-1 py-2 text-[11px] font-bold"
            : "gap-3 rounded-[18px] px-4 py-3 text-sm font-bold"
        } ${
          active
            ? "bg-[#2563EB] text-white shadow-[6px_6px_0_#F7C948]"
            : "text-slate-600 hover:bg-[oklch(94%_0.055_250)] hover:text-[#2563EB]"
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
