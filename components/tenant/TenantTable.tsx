"use client";

import { useState } from "react";

import { toggleTenantStatusAction } from "@/actions/tenant";
import GlassModal from "@/components/ui/Modal";
import PendingSubmitButton from "@/components/ui/PendingSubmitButton";
import TenantForm from "./TenantForm";

type RentalUnitOption = {
  id: string;
  name: string;
  property: {
    name: string;
  };
};

type Tenant = {
  id: string;
  name: string;
  phone: string | null;
  rentalUnitId: string;
  monthlyRent: number;
  initialElectricReading: number;
  electricChargePerUnit: number;
  startMonth: Date;
  isActive: boolean;
  rentalUnit: {
    name: string;
    property: {
      name: string;
    };
  };
};

interface Props {
  tenants: Tenant[];
  rentalUnits: RentalUnitOption[];
}

export default function TenantTable({
  tenants,
  rentalUnits,
}: Props) {
  const [editingTenant, setEditingTenant] =
    useState<Tenant | null>(null);

  if (tenants.length === 0) {
    return (
      <div className="premium-card p-8 text-center text-[var(--muted)]">
        No tenants found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        {tenants.map((tenant) => (
          <article
            key={tenant.id}
            className="premium-card p-4 sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-black text-[var(--ink)]">
                  {tenant.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {tenant.rentalUnit.property.name} ·{" "}
                  {tenant.rentalUnit.name}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                  tenant.isActive
                    ? "bg-green-50 text-green-700 ring-green-200"
                    : "bg-red-50 text-red-700 ring-red-200"
                }`}
              >
                {tenant.isActive ? "Active" : "Inactive"}
              </span>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="premium-cell p-3">
                <dt className="text-[var(--muted)]">Phone</dt>
                <dd className="font-semibold text-[var(--ink)]">
                  {tenant.phone || "-"}
                </dd>
              </div>
              <div className="premium-cell p-3">
                <dt className="text-[var(--muted)]">Rent</dt>
                <dd className="money-text font-semibold text-[var(--ink)]">
                  ₹{tenant.monthlyRent}
                </dd>
              </div>
              <div className="premium-cell p-3">
                <dt className="text-[var(--muted)]">Electric Rate</dt>
                <dd className="money-text font-semibold text-[var(--ink)]">
                  ₹{tenant.electricChargePerUnit}/Unit
                </dd>
              </div>
              <div className="premium-cell p-3">
                <dt className="text-[var(--muted)]">Start</dt>
                <dd className="font-semibold text-[var(--ink)]">
                  {new Date(
                    tenant.startMonth
                  ).toLocaleDateString("en-IN")}
                </dd>
              </div>
            </dl>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setEditingTenant(tenant)}
                className="ghost-action px-4 text-sm"
              >
                Edit
              </button>

              <form action={toggleTenantStatusAction}>
                <input
                  type="hidden"
                  name="id"
                  value={tenant.id}
                />

                <PendingSubmitButton
                  className={`w-full min-h-11 rounded-[12px] px-4 py-2 text-sm shadow-none ${
                    tenant.isActive
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                  pendingText="Saving..."
                >
                  {tenant.isActive ? "Deactivate" : "Activate"}
                </PendingSubmitButton>
              </form>
            </div>
          </article>
        ))}
      </div>

      <GlassModal
        open={Boolean(editingTenant)}
        title="Edit Tenant"
        onClose={() => setEditingTenant(null)}
      >
        {editingTenant && (
          <TenantForm
            rentalUnits={rentalUnits}
            tenant={editingTenant}
            onSuccess={() => setEditingTenant(null)}
            onCancel={() => setEditingTenant(null)}
          />
        )}
      </GlassModal>
    </div>
  );
}
