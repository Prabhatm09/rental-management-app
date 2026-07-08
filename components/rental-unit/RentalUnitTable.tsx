import { deleteRentalUnit } from "@/actions/rentalUnit";

type RentalUnit = {
  id: string;
  name: string;
  property: {
    name: string;
  };
};

interface Props {
  rentalUnits: RentalUnit[];
}

export default function RentalUnitTable({
  rentalUnits,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl">
      <table className="w-full min-w-[640px]">
        <thead className="border-b border-[oklch(88%_0.04_247)] text-sm text-slate-600">
          <tr>
            <th className="p-4 text-left">Property</th>
            <th className="p-4 text-left">Unit</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {rentalUnits.map((unit) => (
            <tr
              key={unit.id}
                className="border-b border-[oklch(92%_0.035_247)] last:border-0"
            >
              <td className="p-4">
                {unit.property.name}
              </td>

              <td className="p-4">
                {unit.name}
              </td>

              <td className="p-4 text-right">
                <form
                  action={async () => {
                    "use server";
                    await deleteRentalUnit(unit.id);
                  }}
                >
                  <button className="font-semibold text-red-600 hover:text-red-700">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}

          {rentalUnits.length === 0 && (
            <tr>
              <td
                colSpan={3}
                className="p-8 text-center text-slate-500"
              >
                No Rental Units Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
