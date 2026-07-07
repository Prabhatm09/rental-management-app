import {
  getPropertyOptions,
  getTenants,
} from "@/actions/tenant";

import TenantForm from "@/components/tenant/TenantForm";
import TenantTable from "@/components/tenant/TenantTable";

export default async function TenantsPage() {
  const properties = await getPropertyOptions();
  const tenants = await getTenants();

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-8 text-4xl font-bold">
          Tenants
        </h1>

        <TenantForm properties={properties} />
      </div>

      <TenantTable tenants={tenants} />
    </div>
  );
}