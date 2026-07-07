import { deleteBill } from "@/actions/bill";

type Bill = {
  id: string;
  month: Date;
  rent: number;
  total: number;
  tenant: {
    name: string;
    property: {
      name: string;
    };
  };
};

interface Props {
  bills: Bill[];
}

export default function BillTable({ bills }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <table className="w-full">
        <thead className="border-b border-white/10">
          <tr>
            <th className="p-4 text-left">Tenant</th>
            <th className="p-4 text-left">Property</th>
            <th className="p-4 text-left">Month</th>
            <th className="p-4 text-left">Rent</th>
            <th className="p-4 text-left">Total</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {bills.map((bill) => (
            <tr
              key={bill.id}
              className="border-b border-white/5"
            >
              <td className="p-4">{bill.tenant.name}</td>
              <td className="p-4">{bill.tenant.property.name}</td>
              <td className="p-4">
                {new Date(bill.month).toLocaleDateString("en-IN", {
                  month: "short",
                  year: "numeric",
                })}
              </td>
              <td className="p-4">₹ {bill.rent}</td>
              <td className="p-4 font-semibold text-green-400">
                ₹ {bill.total}
              </td>

              <td className="p-4 text-right">
                <form
                  action={async () => {
                    "use server";
                    await deleteBill(bill.id);
                  }}
                >
                  <button className="text-red-400 hover:text-red-300">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}

          {bills.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="p-8 text-center text-white/50"
              >
                No Bills Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}