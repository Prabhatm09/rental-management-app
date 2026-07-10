"use client";

import { useRef, useState } from "react";

import { upsertPropertyMonthlyReading } from "@/actions/bill";
import GlassButton from "@/components/ui/GlassButton";
import GlassInput from "@/components/ui/GlassInput";

type Property = {
  id: string;
  name: string;
  motorInitialReading: number;
  readings: {
    id: string;
    month: Date;
    motorCurrentReading: number;
  }[];
};

type Props = {
  properties: Property[];
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function PropertyReadingForm({
  properties,
  onSuccess,
  onCancel,
}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [propertyId, setPropertyId] = useState("");
  const [motorPrevious, setMotorPrevious] = useState(0);
  const [motorCurrent, setMotorCurrent] = useState(0);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const selectedProperty = properties.find(
    (property) => property.id === propertyId
  );

  async function action(formData: FormData) {
    setPending(true);
    setError("");

    try {
      await upsertPropertyMonthlyReading(formData);
      formRef.current?.reset();
      setPropertyId("");
      setMotorPrevious(0);
      setMotorCurrent(0);
      onSuccess?.();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to save monthly reading."
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      ref={formRef}
      action={action}
      className="space-y-5"
    >
      <fieldset
        disabled={pending}
        className="space-y-5 disabled:pointer-events-none disabled:opacity-60"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Property
            </label>
            <select
              name="propertyId"
              required
              value={propertyId}
              onChange={(event) => {
                const nextProperty = properties.find(
                  (property) =>
                    property.id === event.target.value
                );
                const latestReading =
                  nextProperty?.readings[0];
                setPropertyId(event.target.value);
                setMotorPrevious(
                  latestReading?.motorCurrentReading ??
                    nextProperty?.motorInitialReading ??
                    0
                );
                setMotorCurrent(
                  latestReading?.motorCurrentReading ??
                    nextProperty?.motorInitialReading ??
                    0
                );
              }}
              className="electric-input px-4 py-3"
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
              Month
            </label>
            <GlassInput
              type="month"
              name="month"
              required
            />
          </div>
        </div>

        {selectedProperty && (
          <p className="electric-subpanel rounded-xl px-4 py-3 text-sm text-[var(--muted)]">
            This is the optional monthly motor reading for{" "}
            <span className="font-semibold">
              {selectedProperty.name}
            </span>
            . It is not the government or master meter reading.
          </p>
        )}

        <input
          type="hidden"
          name="governmentPreviousReading"
          value="0"
        />
        <input
          type="hidden"
          name="governmentCurrentReading"
          value="0"
        />
        <input
          type="hidden"
          name="governmentOutstanding"
          value="0"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Previous Motor Reading
            </label>
            <GlassInput
              type="number"
              name="motorPreviousReading"
              value={String(motorPrevious)}
              onChange={(event) =>
                setMotorPrevious(Number(event.target.value))
              }
              min={0}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Current Motor Reading
            </label>
            <GlassInput
              type="number"
              name="motorCurrentReading"
              value={String(motorCurrent)}
              onChange={(event) =>
                setMotorCurrent(Number(event.target.value))
              }
              min={0}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--muted)]">
            Current Month Motor Bill Amount
          </label>
          <GlassInput
            type="number"
            name="governmentBillAmount"
            min={0}
            defaultValue={0}
          />
        </div>

        <div className="electric-subpanel rounded-[20px] p-4 text-sm">
          <p>
            Motor units for this month:{" "}
            <span className="font-semibold text-[var(--ink)]">
              {Math.max(0, motorCurrent - motorPrevious)}
            </span>
          </p>
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
            {pending ? "Saving..." : "Save Reading"}
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
