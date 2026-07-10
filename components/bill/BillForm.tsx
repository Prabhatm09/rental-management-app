"use client";

import {
  useActionState,
  useEffect,
  useState,
} from "react";

import { createBillAction } from "@/actions/bill";
import { getPreviousReading } from "@/actions/billHelper";
import GlassInput from "@/components/ui/GlassInput";
import PendingSubmitButton from "@/components/ui/PendingSubmitButton";

type Tenant = {
  id: string;
  name: string;
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

type Props = {
  tenants: Tenant[];
  onSuccess?: () => void;
  onCancel?: () => void;
};

const initialActionState = {
  ok: false,
  message: "",
};

function numberValue(value: number) {
  return value === 0 ? "" : String(value);
}

function formatAmount(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(value);
}

export default function BillForm({
  tenants,
  onSuccess,
  onCancel,
}: Props) {
  const [state, formAction, pending] = useActionState(
    createBillAction,
    initialActionState
  );

  const [tenantId, setTenantId] = useState("");
  const [month, setMonth] = useState("");
  const [electricPrevious, setElectricPrevious] =
    useState(0);
  const [electricCurrent, setElectricCurrent] =
    useState(0);
  const [motorPrevious, setMotorPrevious] =
    useState(0);
  const [motorCurrent, setMotorCurrent] =
    useState<number | null>(null);
  const [motorParticipantCount, setMotorParticipantCount] =
    useState(1);
  const [hasPropertyReading, setHasPropertyReading] =
    useState(false);
  const [motorAdjustmentInput, setMotorAdjustmentInput] =
    useState("0");

  const tenant = tenants.find(
    (item) => item.id === tenantId
  );
  const property = tenant?.rentalUnit.property;
  const monthlyRent = tenant?.monthlyRent ?? 0;
  const electricChargePerUnit =
    tenant?.electricChargePerUnit ?? 0;
  const motorChargePerUnit =
    property?.motorChargePerUnit ?? 8;
  const participatesInMotor =
    tenant?.rentalUnit.participatesInMotor ?? true;

  useEffect(() => {
    if (!state.ok) return;

    const timer = window.setTimeout(() => {
      setTenantId("");
      setMonth("");
      setElectricPrevious(0);
      setElectricCurrent(0);
      setMotorPrevious(0);
      setMotorCurrent(null);
      setMotorParticipantCount(1);
      setHasPropertyReading(false);
      setMotorAdjustmentInput("0");
      onSuccess?.();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [onSuccess, state.ok]);

  useEffect(() => {
    if (!tenantId || !month) return;

    let active = true;

    async function loadPreviousReading() {
      const previous = await getPreviousReading(
        tenantId,
        new Date(month)
      );

      if (!active || !previous) return;

      setElectricPrevious(
        previous.electricPrevious
      );
      setMotorPrevious(previous.motorPrevious);
      setMotorCurrent(previous.motorCurrent);
      setMotorParticipantCount(
        Math.max(1, previous.motorParticipantCount)
      );
      setHasPropertyReading(previous.hasPropertyReading);
    }

    loadPreviousReading();

    return () => {
      active = false;
    };
  }, [tenantId, month]);

  const electricUnits = Math.max(
    0,
    electricCurrent - electricPrevious
  );
  const calculatedElectricAmount =
    electricUnits * electricChargePerUnit;
  const finalElectricAmount = calculatedElectricAmount;
  const motorTotalUnits =
    motorCurrent === null
      ? 0
      : Math.max(0, motorCurrent - motorPrevious);
  const motorShareUnits = participatesInMotor
    ? motorTotalUnits / motorParticipantCount
    : 0;
  const calculatedMotorAmount =
    motorShareUnits * motorChargePerUnit;
  const parsedMotorAdjustment = Number(motorAdjustmentInput);
  const motorAdjustmentAmount = Number.isFinite(
    parsedMotorAdjustment
  )
    ? parsedMotorAdjustment
    : 0;
  const finalMotorAmount =
    calculatedMotorAmount + motorAdjustmentAmount;
  const grandTotal =
    monthlyRent +
    finalElectricAmount +
    finalMotorAmount;

  return (
    <form
      action={formAction}
      className="relative space-y-5"
    >
      {pending && (
        <div className="absolute inset-0 z-10 grid place-items-center rounded-2xl bg-blue-950/20 backdrop-blur-sm">
          <div className="electric-loader">
            Generating bill...
          </div>
        </div>
      )}

      <fieldset
        disabled={pending}
        className="space-y-5 disabled:pointer-events-none disabled:opacity-60"
      >
        <select
          name="tenantId"
          required
          value={tenantId}
          onChange={(event) => {
            setTenantId(event.target.value);
            setElectricPrevious(0);
            setElectricCurrent(0);
            setMotorPrevious(0);
            setMotorCurrent(null);
            setHasPropertyReading(false);
            setMotorAdjustmentInput("0");
          }}
          className="electric-input px-4 py-3"
        >
          <option value="">Select Tenant</option>

          {tenants.map((tenantOption) => (
            <option
              key={tenantOption.id}
              value={tenantOption.id}
            >
              {tenantOption.name}
            </option>
          ))}
        </select>

        <div className="space-y-2">
          <label
            htmlFor="month"
            className="text-sm font-medium text-[var(--muted)]"
          >
            Monthly Bill
          </label>
          <GlassInput
            id="month"
            type="month"
            name="month"
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
              setElectricPrevious(0);
              setMotorPrevious(0);
              setMotorCurrent(null);
              setHasPropertyReading(false);
            }}
            required
          />
        </div>

        {tenant && property && (
          <div className="electric-subpanel space-y-3 rounded-[20px] p-4">
            <div className="flex justify-between gap-4">
              <span className="text-[var(--muted)]">
                Property
              </span>
              <span className="text-right font-medium text-[var(--ink)]">
                {property.name}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-[var(--muted)]">
                Rental Unit
              </span>
              <span className="text-right font-medium text-[var(--ink)]">
                {tenant.rentalUnit.name}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-[var(--muted)]">
                Motor Sharing
              </span>
              <span className="text-right font-medium text-[var(--ink)]">
                {participatesInMotor
                  ? `${motorParticipantCount} participating unit${motorParticipantCount === 1 ? "" : "s"}`
                  : "Not participating"}
              </span>
            </div>
          </div>
        )}

        {month && tenantId && !hasPropertyReading && (
          <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            No monthly motor reading found. Motor calculation will start at ₹0, and you can still use Motor Adjustment for custom sharing.
          </p>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Previous Electric Reading
            </label>
            <GlassInput
              value={electricPrevious}
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">
              Current Electric Reading
            </label>
            <GlassInput
              type="number"
              name="electricCurrent"
              value={numberValue(electricCurrent)}
              onChange={(event) =>
                setElectricCurrent(
                  Number(event.target.value)
                )
              }
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--muted)]">
            Motor Adjustment
          </label>
          <GlassInput
            type="text"
            inputMode="decimal"
            name="motorAdjustmentAmount"
            value={motorAdjustmentInput}
            onChange={(event) =>
              setMotorAdjustmentInput(event.target.value)
            }
            placeholder="+80 or -80"
          />
          <p className="text-sm text-[var(--muted)]">
            {motorAdjustmentAmount < 0
              ? `This reduces this tenant's motor bill by ₹${formatAmount(Math.abs(motorAdjustmentAmount))}. Add +${formatAmount(Math.abs(motorAdjustmentAmount))} to another tenant in the same property/month.`
              : motorAdjustmentAmount > 0
                ? `This adds ₹${formatAmount(motorAdjustmentAmount)} to this tenant's motor bill. Use -${formatAmount(motorAdjustmentAmount)} on another tenant to balance it.`
                : "Enter a signed amount like -80 to reduce this tenant's motor bill or +80 to add it here."}
          </p>
        </div>

        <div className="electric-subpanel space-y-4 rounded-[20px] p-4">
          <div className="flex justify-between gap-4">
            <span className="text-[var(--muted)]">
              Monthly Rent
            </span>
            <span className="text-right font-semibold text-[var(--ink)]">
              ₹ {formatAmount(monthlyRent)}
            </span>
          </div>

          <div className="space-y-1">
              <p className="font-medium text-[var(--ink)]">
              Electric
            </p>
            <p className="text-sm text-[var(--muted)]">
              {formatAmount(electricUnits)} Units x ₹
              {formatAmount(electricChargePerUnit)} = ₹{" "}
              {formatAmount(calculatedElectricAmount)}
            </p>
            <p className="text-sm font-semibold text-[var(--ink)]">
              Amount: ₹ {formatAmount(finalElectricAmount)}
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-[var(--ink)]">Motor</p>
            <p className="text-sm text-[var(--muted)]">
              {formatAmount(motorTotalUnits)} Units /{" "}
              {motorParticipantCount} ={" "}
              {formatAmount(motorShareUnits)} Units x ₹
              {formatAmount(motorChargePerUnit)}
            </p>
            <p className="text-sm font-semibold text-[var(--ink)]">
              Final: ₹ {formatAmount(finalMotorAmount)}
            </p>
            {motorAdjustmentAmount !== 0 && (
              <p className="text-sm text-[var(--muted)]">
                Calculated ₹{formatAmount(calculatedMotorAmount)} · Adjustment ₹{formatAmount(motorAdjustmentAmount)}
              </p>
            )}
          </div>

          <hr className="border-[var(--line)]" />

          <div className="flex justify-between gap-4">
            <span className="text-xl font-bold text-[var(--ink)]">
              Grand Total
            </span>
            <span className="text-xl font-bold text-[var(--accent)]">
              ₹ {formatAmount(grandTotal)}
            </span>
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
            pendingText="Generating..."
          >
            Generate Bill
          </PendingSubmitButton>

          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              disabled={pending}
              className="min-h-12 rounded-[16px] border border-[var(--line)] px-5 font-semibold text-[var(--ink)] transition hover:bg-[var(--surface-soft)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Cancel
            </button>
          )}
        </div>
      </fieldset>
    </form>
  );
}
