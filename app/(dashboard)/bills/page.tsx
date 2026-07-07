import { getBills, getTenants } from "@/actions/bill";
import BillForm from "@/components/bill/BillForm";
import BillTable from "@/components/bill/BillTable";

export default async function BillsPage() {
  const tenants = await getTenants();
  const bills = await getBills();

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">
          Bills
        </h1>

        <BillForm tenants={tenants} />
      </div>

      <BillTable bills={bills} />
    </div>
  );
}