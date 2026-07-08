"use client";

import { createProperty } from "@/actions/property";
import GlassButton from "@/components/ui/GlassButton";
import GlassInput from "@/components/ui/GlassInput";

export default function PropertyForm() {
  async function action(formData: FormData) {
    await createProperty(formData);
  }

  return (
    <form action={action} className="space-y-5">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Property Name
        </label>
        <GlassInput
          name="name"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Property Address
        </label>
        <GlassInput name="address" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Main Motor Initial Reading
        </label>
        <GlassInput
          type="number"
          name="motorInitialReading"
          defaultValue={0}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Motor Charge / Unit
        </label>
        <GlassInput
          type="number"
          name="motorChargePerUnit"
          defaultValue={8}
        />
      </div>

      <GlassButton type="submit" className="w-full">
        Save Property
      </GlassButton>
    </form>
  );
}
