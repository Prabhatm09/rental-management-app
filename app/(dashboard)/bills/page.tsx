import {
  getBills,
  getTenants,
} from "@/actions/bill";
import { connection } from "next/server";

import BillSection from "@/components/bill/BillSection";
import BillTable from "@/components/bill/BillTable";

export default async function BillsPage() {
  await connection();

  const tenants = await getTenants();
  const bills = await getBills();

  return (
    <div className="space-y-8">
      <BillSection tenants={tenants} />

      <BillTable bills={bills} />
    </div>
  );
}
