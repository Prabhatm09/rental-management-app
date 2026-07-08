export default function Loading() {
  return (
    <div
      aria-busy="true"
      className="pointer-events-none space-y-8"
    >
      <div>
        <div className="h-10 w-56 animate-pulse rounded-[16px] bg-[oklch(88%_0.04_247)]" />
        <div className="mt-3 h-5 w-72 max-w-full animate-pulse rounded-[12px] bg-[oklch(88%_0.04_247)]" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[22px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] p-5"
          >
            <div className="h-4 w-24 animate-pulse rounded bg-[oklch(88%_0.04_247)]" />
            <div className="mt-4 h-9 w-16 animate-pulse rounded bg-[oklch(88%_0.04_247)]" />
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)]">
        <div className="border-b border-[oklch(88%_0.04_247)] p-5">
          <div className="h-6 w-36 animate-pulse rounded bg-[oklch(88%_0.04_247)]" />
        </div>
        <div className="space-y-3 p-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-12 animate-pulse rounded-[16px] bg-[oklch(88%_0.04_247)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
