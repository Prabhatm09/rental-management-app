import {
  createProperty,
  deleteProperty,
  getProperties,
} from "@/actions/property";

type Property = {
  id: string;
  name: string;
  address: string | null;
  city: string | null;
  state: string | null;
  pinCode?: string | null;
};

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">Properties</h1>
        <p className="text-white/60">
          Manage all your rental properties.
        </p>
      </div>

      {/* Add Property */}

      <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
        <form action={createProperty} className="grid grid-cols-5 gap-4">
          <input
            name="name"
            placeholder="Property Name"
            className="rounded-xl bg-white/10 p-3 text-white outline-none"
            required
          />

          <input
            name="address"
            placeholder="Address"
            className="rounded-xl bg-white/10 p-3 text-white outline-none"
          />

          <input
            name="city"
            placeholder="City"
            className="rounded-xl bg-white/10 p-3 text-white outline-none"
          />

          <input
            name="state"
            placeholder="State"
            className="rounded-xl bg-white/10 p-3 text-white outline-none"
          />

          <input
            name="pinCode"
            placeholder="Pin Code"
            className="rounded-xl bg-white/10 p-3 text-white outline-none"
          />

          <button
            className="col-span-5 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Add Property
          </button>
        </form>
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">
        <table className="w-full">
          <thead className="border-b border-white/10">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Address</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-left">State</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property: Property) => (
              <tr
                key={property.id}
                className="border-b border-white/5"
              >
                <td className="p-4">{property.name}</td>
                <td className="p-4">{property.address}</td>
                <td className="p-4">{property.city}</td>
                <td className="p-4">{property.state}</td>

                <td className="p-4">
                  <form
                    action={async () => {
                      "use server";
                      await deleteProperty(property.id);
                    }}
                  >
                    <button className="text-red-400 hover:text-red-300">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}

            {properties.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-white/50"
                >
                  No Properties Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}