export default function Loading() {
  return (
    <div
      aria-busy="true"
      className="pointer-events-none space-y-8"
    >
      <div>
        <div className="h-10 w-56 animate-pulse rounded-[12px] bg-[var(--surface-soft)]" />
        <div className="mt-3 h-5 w-72 max-w-full animate-pulse rounded-[10px] bg-[var(--surface-soft)]" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="premium-card p-5"
          >
            <div className="h-4 w-24 animate-pulse rounded bg-[var(--surface-soft)]" />
            <div className="mt-4 h-9 w-16 animate-pulse rounded bg-[var(--surface-soft)]" />
          </div>
        ))}
      </div>

      <div className="premium-section overflow-hidden">
        <div className="border-b border-[var(--line)] p-5">
          <div className="h-6 w-36 animate-pulse rounded bg-[var(--surface-soft)]" />
        </div>
        <div className="space-y-3 p-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-12 animate-pulse rounded-[12px] bg-[var(--surface-soft)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
