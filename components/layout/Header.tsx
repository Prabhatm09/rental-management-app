import ThemeToggle from "./ThemeToggle";

export default function Header() {
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
          <div className="hidden items-center gap-2 sm:flex">
            <div className="h-7 w-7 rounded-full bg-[var(--charge)]" />
            <div className="h-7 w-7 rounded-[9px] bg-[var(--danger)]" />
            <div className="h-7 w-7 rounded-[9px] bg-[var(--accent)]" />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
