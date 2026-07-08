export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.86)] px-4 py-4 backdrop-blur-xl md:px-8">
      <div className="flex min-h-14 items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black tracking-normal text-slate-950 sm:text-2xl">
            Rental Management
          </h2>
          <p className="text-sm font-medium text-slate-500">
          Manage Properties, Tenants & Bills
          </p>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <div className="h-8 w-8 rounded-full bg-[#F7C948]" />
          <div className="h-8 w-8 bg-[#EF4444]" />
          <div className="h-8 w-8 bg-[#2563EB]" />
        </div>
      </div>
    </header>
  );
}
