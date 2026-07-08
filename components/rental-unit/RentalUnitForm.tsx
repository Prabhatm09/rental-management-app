"use client";

import { createRentalUnit } from "@/actions/rentalUnit";
import GlassButton from "@/components/ui/GlassButton";
import GlassInput from "@/components/ui/GlassInput";

type Property = {
  id: string;
  name: string;
};

interface Props {
  properties: Property[];
}

export default function RentalUnitForm({ properties }: Props) {
  return (
    <div className="rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl sm:p-6">
      <form action={createRentalUnit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-600">
            Property
          </label>
          <select
            name="propertyId"
            required
            className="w-full rounded-xl border border-blue-100 bg-white p-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select Property</option>

            {properties.map((property) => (
              <option
                key={property.id}
                value={property.id}
                className="bg-white"
              >
                {property.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-600">
            Unit Name
          </label>
          <GlassInput
            name="name"
            placeholder="Ground Floor, Room 1, Shop 2..."
            required
          />
        </div>

        <GlassButton
          type="submit"
          className="w-full"
        >
          Add Rental Unit
        </GlassButton>

      </form>
    </div>
  );
}
