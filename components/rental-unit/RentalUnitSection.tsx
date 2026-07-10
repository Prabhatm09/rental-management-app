"use client";

import { useState } from "react";

import GlassButton from "@/components/ui/GlassButton";
import GlassModal from "@/components/ui/Modal";
import RentalUnitForm from "./RentalUnitForm";
import RentalUnitTable from "./RentalUnitTable";

type Property = {
  id: string;
  name: string;
};

type RentalUnit = {
  id: string;
  name: string;
  propertyId: string;
  participatesInMotor: boolean;
  property: Property;
  _count: {
    tenants: number;
  };
};

type Props = {
  properties: Property[];
  rentalUnits: RentalUnit[];
};

export default function RentalUnitSection({
  properties,
  rentalUnits,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
            Rental Units
          </h1>

          <p className="mt-1 text-sm font-medium text-[var(--muted)]">
            Manage units, property assignment, and motor participation.
          </p>
        </div>

        <GlassButton
          type="button"
          onClick={() => setOpen(true)}
          className="w-full sm:w-auto"
        >
          Add Unit
        </GlassButton>
      </div>

      <RentalUnitTable
        rentalUnits={rentalUnits}
        properties={properties}
      />

      <GlassModal
        open={open}
        title="Add Rental Unit"
        onClose={() => setOpen(false)}
      >
        <RentalUnitForm
          properties={properties}
          onSuccess={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />
      </GlassModal>
    </div>
  );
}
