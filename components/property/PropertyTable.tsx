export default function PropertyTable() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/10 text-gray-300">
            <th className="pb-4">Name</th>
            <th className="pb-4">City</th>
            <th className="pb-4">Units</th>
            <th className="pb-4">Created</th>
            <th className="pb-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="py-6 text-white">No properties found.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}