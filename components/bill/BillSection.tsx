"use client";

import { useState } from "react";

import BillForm from "./BillForm";
import GlassButton from "@/components/ui/GlassButton";

type Tenant = {
  id: string;
  name: string;
  phone: string | null;
  monthlyRent: number;
  electricChargePerUnit: number;
  initialElectricReading: number;
  initialMotorReading: number;
  rentalUnit: {
    name: string;
    property: {
      id: string;
      name: string;
      motorInitialReading: number;
      motorChargePerUnit: number;
    };
  };
};

interface Props {
  tenants: Tenant[];
}

export default function BillSection({
  tenants,
}: Props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-950 sm:text-4xl">
            Bills
          </h1>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Generate monthly rent and electricity bills.
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
            : "+ Generate Bill"}
        </GlassButton>
      </div>

      {showForm && (
        <div className="rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl sm:p-6">
          <BillForm
            tenants={tenants}
            onSuccess={() =>
              setShowForm(false)
            }
            onCancel={() =>
              setShowForm(false)
            }
          />
        </div>
      )}
    </div>
  );
}
