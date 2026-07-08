"use client";

import { useState } from "react";

import TenantForm from "./TenantForm";
import TenantTable from "./TenantTable";
import GlassButton from "@/components/ui/GlassButton";

type Tenant = {
  id: string;
  name: string;
  phone: string | null;
  monthlyRent: number;
  startMonth: Date;
  isActive: boolean;
  rentalUnit: {
    name: string;
    property: {
      name: string;
    };
  };
};

type RentalUnit = {
  id: string;
  name: string;
  property: {
    name: string;
  };
};

type Props = {
  tenants: Tenant[];
  rentalUnits: RentalUnit[];
};

export default function TenantSection({
  tenants,
  rentalUnits,
}: Props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-950 sm:text-4xl">
            Tenants
          </h1>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Manage your tenants.
          </p>
        </div>

        <GlassButton
          type="button"
          onClick={() =>
            setShowForm(!showForm)
          }
        >
          {showForm
            ? "Close"
            : "+ Add Tenant"}
        </GlassButton>
      </div>

      {showForm && (
        <div className="rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl sm:p-6">
          <TenantForm
            rentalUnits={rentalUnits}
            onSuccess={() =>
              setShowForm(false)
            }
            onCancel={() =>
              setShowForm(false)
            }
          />
        </div>
      )}

      <TenantTable tenants={tenants} />
    </div>
  );
}
