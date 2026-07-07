import { deleteProperty } from "@/actions/property";

type Property = {
  id: string;
  name: string;
  address: string | null;
  createdAt: Date;
};

interface Props {
  properties: Property[];
}

export default function PropertyTable({ properties }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">
      <table className="w-full">
        <thead className="border-b border-white/10">
          <tr>
            <th className="p-4 text-left">Property</th>
            <th className="p-4 text-left">Address</th>
            <th className="p-4 text-left">Created</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((property) => (
            <tr
              key={property.id}
              className="border-b border-white/5"
            >
              <td className="p-4">{property.name}</td>

              <td className="p-4">
                {property.address || "-"}
              </td>

              <td className="p-4">
                {property.createdAt.toLocaleDateString()}
              </td>

              <td className="p-4 text-right">
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
                colSpan={4}
                className="p-8 text-center text-white/50"
              >
                No Properties Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}