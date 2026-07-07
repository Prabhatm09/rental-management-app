import { getProperties } from "@/actions/property";
import PropertyForm from "@/components/property/PropertyForm";
import PropertyTable from "@/components/property/PropertyTable";

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-8 text-4xl font-bold">
          Properties
        </h1>

        <PropertyForm />
      </div>

      <PropertyTable properties={properties} />
    </div>
  );
}