import ThemeToggle from "./ThemeToggle";
import SignOutButton from "./SignOutButton";
import type { CurrentOwner } from "@/lib/owner";

export default function Header({
  owner,
}: {
  owner: CurrentOwner;
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--surface)] px-4 py-3 backdrop-blur-xl md:px-8">
      <div className="flex min-h-12 items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-black tracking-normal text-[var(--ink)] sm:text-xl">
            Rental Management
          </h2>
          <p className="text-xs font-medium text-[var(--muted)]">
            Manage Properties, Tenants & Bills
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden text-right sm:block">
            <p className="max-w-[180px] truncate text-sm font-black text-[var(--ink)]">
              {owner.name || "Owner"}
            </p>
            <p className="max-w-[180px] truncate text-xs font-medium text-[var(--muted)]">
              {owner.email}
            </p>
          </div>
          <ThemeToggle />
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
