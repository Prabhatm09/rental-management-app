import { deleteTenant } from "@/actions/tenant";

type Tenant = {
  id: string;
  name: string;
  phone: string;
  monthlyRent: number;
  startMonth: Date;
  endMonth: Date | null;
  property: {
    name: string;
  };
};

interface Props {
  tenants: Tenant[];
}

export default function TenantTable({ tenants }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <table className="w-full">
        <thead className="border-b border-white/10">
          <tr>
            <th className="p-4 text-left">Tenant</th>
            <th className="p-4 text-left">Property</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Rent</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {tenants.map((tenant) => (
            <tr
              key={tenant.id}
              className="border-b border-white/5"
            >
              <td className="p-4">{tenant.name}</td>
              <td className="p-4">{tenant.property.name}</td>
              <td className="p-4">{tenant.phone}</td>
              <td className="p-4">₹ {tenant.monthlyRent}</td>

              <td className="p-4 text-right">
                <form
                  action={async () => {
                    "use server";
                    await deleteTenant(tenant.id);
                  }}
                >
                  <button className="text-red-400 hover:text-red-300">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}

          {tenants.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="p-8 text-center text-white/50"
              >
                No Tenants Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}