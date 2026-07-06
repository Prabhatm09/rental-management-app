export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">
        Rental Management Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
          <h2 className="text-lg text-gray-300">Properties</h2>

          <p className="mt-3 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
          <h2 className="text-lg text-gray-300">Units</h2>

          <p className="mt-3 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
          <h2 className="text-lg text-gray-300">Tenants</h2>

          <p className="mt-3 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
          <h2 className="text-lg text-gray-300">Bills</h2>

          <p className="mt-3 text-4xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}