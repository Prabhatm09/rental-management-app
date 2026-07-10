"use client";

import { useState } from "react";

import GlassButton from "@/components/ui/GlassButton";
import GlassModal from "@/components/ui/Modal";
import PropertyForm from "./PropertyForm";

export default function AddPropertyModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlassButton
        type="button"
        onClick={() => setOpen(true)}
        className="w-full sm:w-auto"
      >
        Add Property
      </GlassButton>

      <GlassModal
        open={open}
        title="Add Property"
        onClose={() => setOpen(false)}
      >
        <PropertyForm
          onSuccess={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />
      </GlassModal>
    </>
  );
}
