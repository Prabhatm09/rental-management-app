"use client";

import { useState } from "react";

import {
  archiveProperty,
  deleteProperty,
  restoreProperty,
} from "@/actions/property";
import GlassModal from "@/components/ui/Modal";
import PropertyForm from "./PropertyForm";
import {
  Building2,
  Gauge,
  Home,
  MapPin,
} from "lucide-react";

type Property = {
  id: string;
  name: string;
  address: string | null;
  motorInitialReading: number;
  motorChargePerUnit: number;
  isArchived: boolean;
  createdAt: Date;
  _count: {
    units: number;
    readings: number;
  };
};

interface Props {
  properties: Property[];
}

export default function PropertyTable({ properties }: Props) {
  const [editingProperty, setEditingProperty] =
    useState<Property | null>(null);
  const [message, setMessage] = useState("");

  async function handleArchive(property: Property) {
    setMessage("");

    if (property.isArchived) {
      const result = await restoreProperty(property.id);
      setMessage(result.message);
      return;
    }

    const result = await archiveProperty(property.id);
    setMessage(result.message);
  }

  async function handleDelete(property: Property) {
    setMessage("");

    if (
      !window.confirm(
        "Delete this property permanently? Archive is safer if it has business history."
      )
    ) {
      return;
    }

    const result = await deleteProperty(property.id);
    setMessage(result.message);
  }

  if (properties.length === 0) {
    return (
      <div className="premium-card p-8 text-center text-[var(--muted)]">
        No properties found.
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

      <div className="grid gap-4 lg:grid-cols-2">
        {properties.map((property) => (
          <article
            key={property.id}
            className="premium-card p-4 sm:p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-3">
                <div className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-[var(--surface-soft)] text-[var(--accent)]">
                  <Building2 className="size-6" />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-lg font-black text-[var(--ink)]">
                    {property.name}
                  </h2>
                  <p className="mt-1 flex items-center gap-1 text-sm text-[var(--muted)]">
                    <MapPin className="size-4 shrink-0" />
                    <span className="truncate">
                      {property.address || "No address"}
                    </span>
                  </p>
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                  property.isArchived
                    ? "bg-slate-100 text-slate-600 ring-slate-200"
                    : "bg-green-50 text-green-700 ring-green-200"
                }`}
              >
                {property.isArchived ? "Archived" : "Active"}
              </span>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="premium-cell p-3">
                <dt className="flex items-center gap-2 text-[var(--muted)]">
                  <Home className="size-4" />
                  Units
                </dt>
                <dd className="number-text mt-1 font-black text-[var(--ink)]">
                  {property._count.units}
                </dd>
              </div>
              <div className="premium-cell p-3">
                <dt className="flex items-center gap-2 text-[var(--muted)]">
                  <Gauge className="size-4" />
                  Readings
                </dt>
                <dd className="number-text mt-1 font-black text-[var(--ink)]">
                  {property._count.readings}
                </dd>
              </div>
              <div className="premium-cell p-3">
                <dt className="text-[var(--muted)]">Motor Initial</dt>
                <dd className="number-text mt-1 font-black text-[var(--ink)]">
                  {property.motorInitialReading}
                </dd>
              </div>
              <div className="premium-cell p-3">
                <dt className="text-[var(--muted)]">Motor Rate</dt>
                <dd className="money-text mt-1 font-black text-[var(--ink)]">
                  ₹{property.motorChargePerUnit}/Unit
                </dd>
              </div>
            </dl>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <button
                type="button"
                onClick={() => setEditingProperty(property)}
                className="ghost-action px-4 text-sm"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleArchive(property)}
                className="ghost-action px-4 text-sm"
              >
                {property.isArchived ? "Restore" : "Archive"}
              </button>
              <button
                type="button"
                onClick={() => handleDelete(property)}
                disabled={
                  property._count.units > 0 ||
                  property._count.readings > 0
                }
                className="electric-danger col-span-2 min-h-11 rounded-[12px] px-4 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-1"
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>

      <GlassModal
        open={Boolean(editingProperty)}
        title="Edit Property"
        onClose={() => setEditingProperty(null)}
      >
        {editingProperty && (
          <PropertyForm
            property={editingProperty}
            onSuccess={() => setEditingProperty(null)}
            onCancel={() => setEditingProperty(null)}
          />
        )}
      </GlassModal>
    </div>
  );
}
