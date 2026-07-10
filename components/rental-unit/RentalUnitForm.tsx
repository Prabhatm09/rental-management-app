"use client";

import { useRef, useState } from "react";

import {
  createRentalUnit,
  updateRentalUnit,
} from "@/actions/rentalUnit";
import GlassButton from "@/components/ui/GlassButton";
import GlassInput from "@/components/ui/GlassInput";

type Property = {
  id: string;
  name: string;
};

type RentalUnit = {
  id: string;
  name: string;
  propertyId: string;
  participatesInMotor: boolean;
};

interface Props {
  properties: Property[];
  rentalUnit?: RentalUnit;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function RentalUnitForm({
  properties,
  rentalUnit,
  onSuccess,
  onCancel,
}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const isEditing = Boolean(rentalUnit);

  async function action(formData: FormData) {
    setError("");
    setPending(true);

    try {
      if (isEditing) {
        await updateRentalUnit(formData);
      } else {
        await createRentalUnit(formData);
      }

      formRef.current?.reset();
      onSuccess?.();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to save rental unit."
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      ref={formRef}
      action={action}
      className="relative space-y-5"
    >
      {rentalUnit && (
        <input
          type="hidden"
          name="id"
          value={rentalUnit.id}
        />
      )}

      <fieldset
        disabled={pending}
        className="space-y-5 disabled:pointer-events-none disabled:opacity-60"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--muted)]">
            Property
          </label>
          <select
            name="propertyId"
            required
            defaultValue={rentalUnit?.propertyId ?? ""}
            className="min-h-12 w-full rounded-[16px] border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-glow)]"
          >
            <option value="">Select Property</option>

            {properties.map((property) => (
              <option
                key={property.id}
                value={property.id}
              >
                {property.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--muted)]">
            Unit Number / Name
          </label>
          <GlassInput
            name="name"
            defaultValue={rentalUnit?.name ?? ""}
            placeholder="Ground Floor, Room 1, Shop 2..."
            required
          />
        </div>

        <label className="flex min-h-12 items-center justify-between gap-4 rounded-[16px] border border-[var(--line)] bg-[var(--surface)] px-4 py-3">
          <span>
            <span className="block text-sm font-semibold text-[var(--ink)]">
              Participates In Motor
            </span>
            <span className="text-xs text-[var(--muted)]">
              Turn off for units that should not receive motor charges.
            </span>
          </span>
          <input
            type="checkbox"
            name="participatesInMotor"
            defaultChecked={
              rentalUnit?.participatesInMotor ?? true
            }
            className="size-5 accent-[var(--accent)]"
          />
        </label>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <div className="sticky bottom-0 -mx-5 flex gap-3 border-t border-[var(--line)] bg-[var(--surface)] px-5 py-4 sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0">
          <GlassButton
            type="submit"
            className="flex-1"
            disabled={pending}
          >
            {pending
              ? "Saving..."
              : isEditing
                ? "Save Changes"
                : "Add Rental Unit"}
          </GlassButton>

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
