"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { signOut } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await signOut();
          router.replace("/sign-in");
          router.refresh();
        });
      }}
      className="grid h-10 w-10 place-items-center rounded-[12px] border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] transition hover:border-[var(--danger)] hover:text-[var(--danger)] disabled:opacity-60"
      aria-label="Sign out"
      title="Sign out"
    >
      <LogOut size={18} />
    </button>
  );
}
