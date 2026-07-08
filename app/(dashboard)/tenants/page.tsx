import {
  getRentalUnitOptions,
  getTenants,
} from "@/actions/tenant";
import { connection } from "next/server";

import TenantSection from "@/components/tenant/TenantSection";

export default async function TenantsPage() {
  await connection();

  const tenants = await getTenants();

  const rentalUnits =
    await getRentalUnitOptions();

  return (
    <TenantSection
      tenants={tenants}
      rentalUnits={rentalUnits}
    />
  );
}
