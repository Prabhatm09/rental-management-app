import { toggleTenantStatusAction } from "@/actions/tenant";
import PendingSubmitButton from "@/components/ui/PendingSubmitButton";


type Tenant = {
  id: string;
  name: string;
  phone: string | null;
  monthlyRent: number;
  startMonth: Date;
  isActive: boolean;
  rentalUnit: {
    name: string;
    property: {
      name: string;
    };
  };
};

interface Props {
  tenants: Tenant[];
}

export default function TenantTable({ tenants }: Props) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl">
      <table className="w-full min-w-[900px]">
        <thead className="border-b border-[oklch(88%_0.04_247)] text-sm text-slate-600">
          <tr>
            <th className="p-4 text-left">Tenant</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Property</th>
            <th className="p-4 text-left">Rental Unit</th>
            <th className="p-4 text-left">Rent</th>
            <th className="p-4 text-left">Start Date</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {tenants.map((tenant) => (
            <tr
              key={tenant.id}
              className="border-b border-[oklch(92%_0.035_247)] last:border-0"
            >
              <td className="p-4">{tenant.name}</td>

              <td className="p-4">
                {tenant.phone || "-"}
              </td>

              <td className="p-4">
                {tenant.rentalUnit.property.name}
              </td>

              <td className="p-4">
                {tenant.rentalUnit.name}
              </td>

              <td className="p-4">
                ₹{tenant.monthlyRent}
              </td>

              <td className="p-4">
                {new Date(
                  tenant.startMonth
                ).toLocaleDateString()}
              </td>

              <td className="p-4">
                {tenant.isActive ? (
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-medium text-red-600">
                    Inactive
                  </span>
                )}
              </td>

             <td className="p-4 text-right">
              <form action={toggleTenantStatusAction}>
                <input
                  type="hidden"
                  name="id"
                  value={tenant.id}
                />

                <PendingSubmitButton
                  className={`rounded-lg px-3 py-1 text-sm text-white ${
                    tenant.isActive
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                  pendingText="Saving..."
                >
                  {tenant.isActive
                    ? "Deactivate"
                    : "Activate"}
                </PendingSubmitButton>
              </form>
            </td>
            </tr>
          ))}

          {tenants.length === 0 && (
            <tr>
              <td
                colSpan={8}
                  className="p-8 text-center text-slate-500"
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
