export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-white/5 px-8 backdrop-blur-xl">
      <div>
        <h2 className="text-2xl font-bold">Rental Management</h2>
        <p className="text-sm text-white/60">
          Manage Properties, Tenants & Bills
        </p>
      </div>
    </header>
  );
}