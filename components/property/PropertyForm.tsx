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
      <GlassInput
        name="name"
        placeholder="Property Name"
        required
      />

      <GlassInput
        name="address"
        placeholder="Property Address"
      />

      <GlassButton type="submit" className="w-full">
        Save Property
      </GlassButton>
    </form>
  );
}