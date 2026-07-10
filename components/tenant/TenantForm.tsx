"use client";

import {
  useActionState,
  useEffect,
  useRef,
} from "react";

import {
  createTenantAction,
  updateTenantAction,
} from "@/actions/tenant";
import GlassInput from "@/components/ui/GlassInput";
import PendingSubmitButton from "@/components/ui/PendingSubmitButton";

type RentalUnit = {
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
  startMonth: Date;
  isActive: boolean;
  monthlyRent: number;
  initialElectricReading: number;
  electricChargePerUnit: number;
};

interface Props {
  rentalUnits: RentalUnit[];
  tenant?: Tenant;
  onSuccess?: () => void;
  onCancel?: () => void;
}

function formatDateInput(value?: Date) {
  if (!value) return "";

  return new Date(value).toISOString().slice(0, 10);
}

export default function TenantForm({
  rentalUnits,
  tenant,
  onSuccess,
  onCancel,
}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const isEditing = Boolean(tenant);
  const [state, formAction, pending] = useActionState(
    isEditing ? updateTenantAction : createTenantAction,
    {
      ok: false,
      message: "",
    }
  );

  useEffect(() => {
    if (!state.ok) return;

    if (!isEditing) {
      formRef.current?.reset();
    }

    onSuccess?.();
  }, [isEditing, onSuccess, state.ok]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="relative space-y-5"
    >
      {tenant && (
        <input
          type="hidden"
          name="id"
          value={tenant.id}
        />
      )}

      {pending && (
        <div className="absolute inset-0 z-10 grid place-items-center rounded-2xl bg-blue-950/20 backdrop-blur-sm">
          <div className="electric-loader">
            Saving tenant...
          </div>
        </div>
      )}

      <fieldset
        disabled={pending}
        className="space-y-5 disabled:pointer-events-none disabled:opacity-60"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--muted)]">
            Tenant Name
          </label>
          <GlassInput
            name="name"
            defaultValue={tenant?.name ?? ""}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--muted)]">
            Phone Number
          </label>
          <GlassInput
            name="phone"
            defaultValue={tenant?.phone ?? ""}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--muted)]">
            Rental Unit
          </label>
          <select
            name="rentalUnitId"
            required
            defaultValue={tenant?.rentalUnitId ?? ""}
            className="min-h-12 w-full rounded-[16px] border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] disabled:cursor-not-allowed disabled:opacity-60"
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

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Start Date
            </label>

            <GlassInput
              type="date"
              name="startMonth"
              defaultValue={formatDateInput(
                tenant?.startMonth
              )}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Status
            </label>
            <select
              name="isActive"
              defaultValue={
                tenant?.isActive === false
                  ? "false"
                  : "true"
              }
              className="min-h-12 w-full rounded-[16px] border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)]"
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Monthly Rent
            </label>
            <GlassInput
              type="number"
              name="monthlyRent"
              defaultValue={tenant?.monthlyRent ?? ""}
              min={0}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Initial Electric Reading
            </label>
            <GlassInput
              type="number"
              name="initialElectricReading"
              defaultValue={
                tenant?.initialElectricReading ?? ""
              }
              min={0}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Electric Charge / Unit
            </label>
            <GlassInput
              type="number"
              name="electricChargePerUnit"
              defaultValue={
                tenant?.electricChargePerUnit ?? ""
              }
              min={0}
              required
            />
          </div>
        </div>

        {state.message && !state.ok && (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {state.message}
          </p>
        )}

        <div className="sticky bottom-0 -mx-5 flex gap-3 border-t border-[var(--line)] bg-[var(--surface)] px-5 py-4 sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0">
          <PendingSubmitButton
            className="flex-1"
            pendingText="Saving..."
          >
            {isEditing ? "Save Changes" : "Save Tenant"}
          </PendingSubmitButton>

          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              disabled={pending}
              className="min-h-12 rounded-[16px] border border-[var(--line)] px-5 font-semibold text-[var(--ink)] hover:bg-[var(--surface-soft)]"
            >
              Cancel
            </button>
          )}
        </div>
      </fieldset>
    </form>
  );
}
