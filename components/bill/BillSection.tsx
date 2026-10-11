"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

import BillForm from "./BillForm";
import GlassButton from "@/components/ui/GlassButton";
import GlassModal from "@/components/ui/Modal";
import PropertyReadingForm from "./PropertyReadingForm";
import {
  Building2,
  Gauge,
  IndianRupee,
  Pencil,
  SlidersHorizontal,
} from "lucide-react";

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
    participatesInMotor: boolean;
    property: {
      id: string;
      name: string;
      motorInitialReading: number;
      motorChargePerUnit: number;
    };
  };
};

type PropertyReadingOption = {
  id: string;
  name: string;
  motorInitialReading: number;
  readings: {
    id: string;
    month: Date;
    motorCurrentReading: number;
  }[];
};

type PropertyReading = {
  id: string;
  month: Date;
  propertyId: string;
  governmentPreviousReading: number;
  governmentCurrentReading: number;
  governmentBillAmount: number;
  governmentOutstanding: number;
  motorPreviousReading: number;
  motorCurrentReading: number;
  motorUnits: number;
  property: {
    name: string;
  };
  bills: {
    electricUnits: number;
    motorAdjustmentAmount: number;
    tenant: {
      rentalUnit: {
        participatesInMotor: boolean;
      };
    };
  }[];
};

interface Props {
  tenants: Tenant[];
  properties: PropertyReadingOption[];
  readings: PropertyReading[];
}

export default function BillSection({
  tenants,
  properties,
  readings,
}: Props) {
  const [showForm, setShowForm] = useState(false);
  const [showReadingForm, setShowReadingForm] =
    useState(false);
  const [editingReading, setEditingReading] =
    useState<PropertyReading | null>(null);
  const router = useRouter();

  function closeReadingForm() {
    setShowReadingForm(false);
    setEditingReading(null);
  }

  function handleReadingSuccess() {
    closeReadingForm();
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
            Bills
          </h1>

          <p className="mt-1 text-sm font-medium text-[var(--muted)]">
            Generate monthly rent and electricity bills.
          </p>
        </div>

        <div className="grid gap-2 sm:flex">
          <GlassButton
            type="button"
            onClick={() => setShowReadingForm(true)}
            className="w-full sm:w-auto"
          >
            Add Reading
          </GlassButton>
          <GlassButton
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="w-full sm:w-auto"
          >
            {showForm ? "Close" : "Generate Bill"}
          </GlassButton>
        </div>
      </div>

      {readings.length > 0 && (
        <section className="premium-section overflow-hidden">
          <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3">
            <div>
              <h2 className="font-black text-[var(--ink)]">
                Motor Reading Ledger
              </h2>
              <p className="text-sm text-[var(--muted)]">
                Latest monthly motor readings by building.
              </p>
            </div>
            <Gauge className="size-5 text-[var(--accent)]" />
          </div>

          <div className="divide-y divide-[var(--line)]">
            {readings.slice(0, 4).map((reading) => {
              const motorAdjustmentTotal =
                reading.bills.reduce(
                  (total, bill) =>
                    total + bill.motorAdjustmentAmount,
                  0
                );

              return (
                <article
                  key={reading.id}
                  className="grid gap-3 px-4 py-4 lg:grid-cols-[minmax(220px,1.1fr)_repeat(4,minmax(120px,0.7fr))_minmax(150px,0.8fr)] lg:items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-[12px] bg-[var(--surface-soft)] text-[var(--accent)]">
                      <Building2 className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate font-black text-[var(--ink)]">
                        {reading.property.name}
                      </h3>
                      <p className="text-sm text-[var(--muted)]">
                        {new Date(
                          reading.month
                        ).toLocaleDateString("en-IN", {
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <LedgerValue
                    label="Previous"
                    value={reading.motorPreviousReading}
                  />
                  <LedgerValue
                    label="Current"
                    value={reading.motorCurrentReading}
                  />
                  <LedgerValue
                    label="Units"
                    value={reading.motorUnits}
                  />
                  <LedgerValue
                    label="Month Bill"
                    value={`₹${reading.governmentBillAmount}`}
                    icon={<IndianRupee className="size-4" />}
                  />
                  <div className="flex items-center gap-2">
                    <div
                      className={`min-w-0 flex-1 rounded-[12px] px-3 py-2 text-sm font-semibold ${
                        motorAdjustmentTotal === 0
                          ? "bg-[var(--surface-soft)] text-[var(--muted)]"
                          : "bg-amber-500/10 text-[var(--warning)]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <SlidersHorizontal className="size-4" />
                        Adjustment {motorAdjustmentTotal}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingReading(reading);
                        setShowReadingForm(true);
                      }}
                      aria-label={`Edit ${reading.property.name} motor reading`}
                      title="Edit reading"
                      className="grid size-10 shrink-0 place-items-center rounded-[12px] border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent-strong)] transition hover:border-[var(--accent)] hover:bg-[var(--surface-soft)]"
                    >
                      <Pencil className="size-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {showForm && (
        <div className="electric-panel rounded-[20px] p-5 sm:p-6">
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

      <GlassModal
        open={showReadingForm}
        title={editingReading ? "Edit Motor Reading" : "Monthly Motor Reading"}
        onClose={closeReadingForm}
      >
        <PropertyReadingForm
          key={editingReading?.id ?? "new-reading"}
          properties={properties}
          reading={editingReading}
          onSuccess={handleReadingSuccess}
          onCancel={closeReadingForm}
        />
      </GlassModal>
    </div>
  );
}

function LedgerValue({
  label,
  value,
  icon,
}: {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-[12px] bg-[var(--surface-soft)] px-3 py-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
        {label}
      </p>
      <div className="number-text mt-1 flex items-center gap-1 font-black text-[var(--ink)]">
        {icon}
        {value}
      </div>
    </div>
  );
}
