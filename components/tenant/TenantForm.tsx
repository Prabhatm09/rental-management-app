"use client";

import { useActionState, useEffect } from "react";

import { createTenantAction } from "@/actions/tenant";
import GlassInput from "@/components/ui/GlassInput";
import PendingSubmitButton from "@/components/ui/PendingSubmitButton";

type RentalUnit = {
  id: string;
  name: string;
  property: {
    name: string;
  };
};

interface Props {
  rentalUnits: RentalUnit[];
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function TenantForm({
  rentalUnits,
  onSuccess,
  onCancel,
}: Props) {
  const [state, formAction, pending] = useActionState(
    createTenantAction,
    {
      ok: false,
      message: "",
    }
  );

  useEffect(() => {
    if (state.ok) {
      onSuccess?.();
    }
  }, [onSuccess, state.ok]);

  return (
    <form action={formAction} className="relative space-y-5">
      {pending && (
        <div className="absolute inset-0 z-10 grid place-items-center rounded-2xl bg-blue-950/20 backdrop-blur-sm">
          <div className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-lg">
            Saving tenant...
          </div>
        </div>
      )}

      <fieldset
        disabled={pending}
        className="space-y-5 disabled:pointer-events-none disabled:opacity-60"
      >
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Tenant Name
        </label>
        <GlassInput
          name="name"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Phone Number
        </label>
        <GlassInput
          name="phone"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Rental Unit
        </label>
        <select
          name="rentalUnitId"
          required
          className="w-full rounded-xl border border-blue-100 bg-white p-3 text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <option value="">Select Rental Unit</option>

          {rentalUnits.map((unit) => (
            <option
              key={unit.id}
              value={unit.id}
            >
              {unit.property.name} - {unit.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Start Date
        </label>

        <GlassInput
          type="date"
          name="startMonth"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Monthly Rent
        </label>
        <GlassInput
          type="number"
          name="monthlyRent"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Initial Electric Reading
        </label>
        <GlassInput
          type="number"
          name="initialElectricReading"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">
          Electric Charge / Unit
        </label>
        <GlassInput
          type="number"
          name="electricChargePerUnit"
          required
        />
      </div>

      {state.message && !state.ok && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {state.message}
        </p>
      )}

      <div className="flex gap-3">
        <PendingSubmitButton
          className="flex-1"
          pendingText="Saving..."
        >
          Save Tenant
        </PendingSubmitButton>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={pending}
            className="rounded-xl border border-blue-100 px-6 py-3 text-slate-700 hover:bg-blue-50"
          >
            Cancel
          </button>
        )}
      </div>
      </fieldset>
    </form>
  );
}
