export default function PropertyHeader() {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Properties
        </h1>

        <p className="mt-1 text-gray-300">
          Manage all your rental properties.
        </p>
      </div>

      <button
        className="
        rounded-xl
        bg-blue-600
        px-5
        py-3
        font-semibold
        text-white
        transition
        hover:bg-blue-700
      "
      >
        + Add Property
      </button>
    </div>
  );
}