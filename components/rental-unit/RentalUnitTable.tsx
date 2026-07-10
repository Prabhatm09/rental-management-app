"use client";

import { useState } from "react";

import { deleteRentalUnit } from "@/actions/rentalUnit";
import GlassModal from "@/components/ui/Modal";
import RentalUnitForm from "./RentalUnitForm";
import {
  Building2,
  DoorOpen,
  Layers3,
  Zap,
} from "lucide-react";

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

interface Props {
  rentalUnits: RentalUnit[];
  properties: Property[];
}

export default function RentalUnitTable({
  rentalUnits,
  properties,
}: Props) {
  const [editingUnit, setEditingUnit] =
    useState<RentalUnit | null>(null);
  const [message, setMessage] = useState("");
  const groupedUnits = rentalUnits.reduce<
    Record<string, RentalUnit[]>
  >((groups, unit) => {
    const key = unit.property.name;
    groups[key] = groups[key] ?? [];
    groups[key].push(unit);
    return groups;
  }, {});

  async function handleDelete(unit: RentalUnit) {
    setMessage("");

    if (
      !window.confirm(
        "Delete this rental unit? Units with tenant history should be kept."
      )
    ) {
      return;
    }

    const result = await deleteRentalUnit(unit.id);
    setMessage(result.message);
  }

  if (rentalUnits.length === 0) {
    return (
      <div className="premium-card p-8 text-center text-[var(--muted)]">
        No rental units found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {message && (
        <p className="premium-cell px-4 py-3 text-sm font-medium text-[var(--ink)]">
          {message}
        </p>
      )}

      <div className="grid gap-4 xl:grid-cols-2">
        {Object.entries(groupedUnits).map(
          ([propertyName, units]) => (
            <section
              key={propertyName}
              className="premium-section overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-[12px] bg-[var(--surface-soft)] text-[var(--accent)]">
                    <Building2 className="size-5" />
                  </div>
                  <div>
                    <h2 className="font-black text-[var(--ink)]">
                      {propertyName}
                    </h2>
                    <p className="text-sm text-[var(--muted)]">
                      {units.length} rental unit
                      {units.length === 1 ? "" : "s"}
                    </p>
                  </div>
                </div>
                <Layers3 className="size-5 text-[var(--muted)]" />
              </div>

              <div className="divide-y divide-[var(--line)]">
                {units.map((unit) => (
                  <article
                    key={unit.id}
                    className="grid gap-3 px-4 py-3 sm:grid-cols-[minmax(180px,1fr)_140px_120px_180px] sm:items-center"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-[var(--surface-soft)] text-[var(--ink)]">
                        <DoorOpen className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate font-black text-[var(--ink)]">
                          {unit.name}
                        </h3>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                          Unit / Floor
                        </p>
                      </div>
                    </div>

                    <div className="number-text rounded-[12px] bg-[var(--surface-soft)] px-3 py-2 text-sm font-semibold text-[var(--ink)]">
                      {unit._count.tenants} tenant record
                      {unit._count.tenants === 1 ? "" : "s"}
                    </div>

                    <div
                      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-[12px] px-3 text-sm font-semibold ${
                        unit.participatesInMotor
                          ? "bg-cyan-500/10 text-[var(--accent)]"
                          : "bg-[var(--surface-soft)] text-[var(--muted)]"
                      }`}
                    >
                      <Zap className="size-4" />
                      {unit.participatesInMotor ? "Motor" : "No motor"}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setEditingUnit(unit)}
                        className="ghost-action px-4 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(unit)}
                        disabled={unit._count.tenants > 0}
                        className="electric-danger min-h-11 rounded-[12px] px-4 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )
        )}
      </div>

      <GlassModal
        open={Boolean(editingUnit)}
        title="Edit Rental Unit"
        onClose={() => setEditingUnit(null)}
      >
        {editingUnit && (
          <RentalUnitForm
            properties={properties}
            rentalUnit={editingUnit}
            onSuccess={() => setEditingUnit(null)}
            onCancel={() => setEditingUnit(null)}
          />
        )}
      </GlassModal>
    </div>
  );
}
