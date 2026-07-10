import { getProperties } from "@/actions/property";
import PropertyTable from "@/components/property/PropertyTable";
import { connection } from "next/server";
import AddPropertyModal from "@/components/property/AddPropertyModal";

export default async function PropertiesPage() {
  await connection();

  const properties = await getProperties();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
        <h1 className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
          Properties
        </h1>
        <p className="mt-1 text-sm font-medium text-[var(--muted)]">
          Set up buildings and their shared motor meter rate.
        </p>
        </div>
        <AddPropertyModal />
      </div>

      <PropertyTable properties={properties} />
    </div>
  );
}
