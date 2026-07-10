import {
  getBills,
  getPropertyReadingOptions,
  getPropertyReadings,
  getTenants,
} from "@/actions/bill";
import { connection } from "next/server";

import BillSection from "@/components/bill/BillSection";
import BillTable from "@/components/bill/BillTable";

export default async function BillsPage() {
  await connection();

  const [tenants, bills, properties, readings] =
    await Promise.all([
      getTenants(),
      getBills(),
      getPropertyReadingOptions(),
      getPropertyReadings(),
    ]);

  return (
    <div className="space-y-8">
      <BillSection
        tenants={tenants}
        properties={properties}
        readings={readings}
      />

      <BillTable bills={bills} />
    </div>
  );
}
