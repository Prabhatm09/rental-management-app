import { getProperties } from "@/actions/property";
import PropertyForm from "@/components/property/PropertyForm";
import PropertyTable from "@/components/property/PropertyTable";
import { connection } from "next/server";

export default async function PropertiesPage() {
  await connection();

  const properties = await getProperties();

  return (
    <div className="space-y-8">
      <div className="max-w-2xl rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl sm:p-6">
        <h1 className="mb-2 text-3xl font-black text-slate-950 sm:text-4xl">
          Properties
        </h1>
        <p className="mb-6 text-sm font-medium text-slate-500">
          Set up buildings and their shared motor meter rate.
        </p>

        <PropertyForm />
      </div>

      <PropertyTable properties={properties} />
    </div>
  );
}
