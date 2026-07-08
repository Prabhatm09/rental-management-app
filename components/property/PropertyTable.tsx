import { deleteProperty } from "@/actions/property";

type Property = {
  id: string;
  name: string;
  address: string | null;
  motorInitialReading: number;
  motorChargePerUnit: number;
  createdAt: Date;
  _count: {
    units: number;
  };
};

interface Props {
  properties: Property[];
}

export default function PropertyTable({ properties }: Props) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl">
      <table className="w-full min-w-[860px]">
        <thead className="border-b border-[oklch(88%_0.04_247)] text-sm text-slate-600">
          <tr>
            <th className="p-4 text-left">Property</th>
            <th className="p-4 text-left">Address</th>
            <th className="p-4 text-left">Motor Initial</th>
            <th className="p-4 text-left">Motor Rate</th>
            <th className="p-4 text-left">Units</th>
            <th className="p-4 text-left">Created</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((property) => (
            <tr
              key={property.id}
              className="border-b border-[oklch(92%_0.035_247)] last:border-0"
            >
              <td className="p-4">{property.name}</td>

              <td className="p-4">
                {property.address || "-"}
              </td>

              <td className="p-4">
                {property.motorInitialReading}
              </td>

              <td className="p-4">
                ₹{property.motorChargePerUnit}/Unit
              </td>

              <td className="p-4">
                {property._count.units}
              </td>

              <td className="p-4">
                {property.createdAt.toLocaleDateString()}
              </td>

              <td className="p-4 text-right">
                {property._count.units > 0 ? (
                  <span className="text-sm text-slate-400">
                    Remove units first
                  </span>
                ) : (
                  <form
                    action={async () => {
                      "use server";
                      await deleteProperty(property.id);
                    }}
                  >
                    <button className="font-semibold text-red-600 hover:text-red-700">
                      Delete
                    </button>
                  </form>
                )}
              </td>
            </tr>
          ))}

          {properties.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="p-8 text-center text-slate-500"
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
