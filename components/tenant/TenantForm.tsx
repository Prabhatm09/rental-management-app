"use client";

import { createTenant } from "@/actions/tenant";
import GlassButton from "@/components/ui/GlassButton";
import GlassInput from "@/components/ui/GlassInput";

interface Property {
  id: string;
  name: string;
}

interface Props {
  properties: Property[];
}

export default function TenantForm({ properties }: Props) {
  async function action(formData: FormData) {
    await createTenant(formData);
  }

  return (
    <form action={action} className="space-y-5">
      <GlassInput
        name="name"
        placeholder="Tenant Name"
        required
      />

      <GlassInput
        name="phone"
        placeholder="Phone Number"
        required
      />

      <select
        name="propertyId"
        required
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
      >
        <option value="">Select Property</option>

        {properties.map((property) => (
          <option
            key={property.id}
            value={property.id}
            className="bg-zinc-900"
          >
            {property.name}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-2 gap-4">
        <GlassInput
          type="date"
          name="startMonth"
          required
        />

        <GlassInput
          type="date"
          name="endMonth"
        />
      </div>

      <GlassInput
        type="number"
        name="monthlyRent"
        placeholder="Monthly Rent"
        required
      />

      <GlassButton
        type="submit"
        className="w-full"
      >
        Save Tenant
      </GlassButton>
    </form>
  );
}