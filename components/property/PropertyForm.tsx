"use client";

import { useRef, useState } from "react";

import {
  createProperty,
  updateProperty,
} from "@/actions/property";
import GlassButton from "@/components/ui/GlassButton";
import GlassInput from "@/components/ui/GlassInput";

type Property = {
  id: string;
  name: string;
  address: string | null;
  motorInitialReading: number;
  motorChargePerUnit: number;
};

type Props = {
  property?: Property;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function PropertyForm({
  property,
  onSuccess,
  onCancel,
}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const isEditing = Boolean(property);

  async function action(formData: FormData) {
    setError("");
    setPending(true);

    try {
      if (isEditing) {
        await updateProperty(formData);
      } else {
        await createProperty(formData);
      }

      formRef.current?.reset();
      onSuccess?.();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to save property."
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
      {property && (
        <input
          type="hidden"
          name="id"
          value={property.id}
        />
      )}

      <fieldset
        disabled={pending}
        className="space-y-5 disabled:pointer-events-none disabled:opacity-60"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--muted)]">
            Property Name
          </label>
          <GlassInput
            name="name"
            defaultValue={property?.name ?? ""}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--muted)]">
            Property Address
          </label>
          <GlassInput
            name="address"
            defaultValue={property?.address ?? ""}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Main Motor Initial Reading
            </label>
            <GlassInput
              type="number"
              name="motorInitialReading"
              defaultValue={
                property?.motorInitialReading ?? 0
              }
              min={0}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Motor Charge / Unit
            </label>
            <GlassInput
              type="number"
              name="motorChargePerUnit"
              defaultValue={
                property?.motorChargePerUnit ?? 8
              }
              min={0}
            />
          </div>
        </div>

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
                : "Save Property"}
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
