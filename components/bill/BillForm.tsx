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
  const [motorPrevious, setMotorPrevious] =
    useState(0);
  const [electricCurrent, setElectricCurrent] =
    useState(0);
  const [motorCurrent, setMotorCurrent] =
    useState(0);
  const [adjustmentAmount, setAdjustmentAmount] =
    useState(0);

  const tenant = tenants.find(
    (item) => item.id === tenantId
  );
  const property = tenant?.rentalUnit.property;
  const monthlyRent = tenant?.monthlyRent ?? 0;
  const electricChargePerUnit =
    tenant?.electricChargePerUnit ?? 0;
  const motorChargePerUnit =
    property?.motorChargePerUnit ?? 8;
  const activeTenantsInProperty = property
    ? Math.max(
        1,
        tenants.filter(
          (item) =>
            item.rentalUnit.property.id === property.id
        ).length
      )
    : 1;

  useEffect(() => {
    if (!state.ok) return;

    const timer = window.setTimeout(() => {
      setTenantId("");
      setMonth("");
      setElectricPrevious(0);
      setMotorPrevious(0);
      setElectricCurrent(0);
      setMotorCurrent(0);
      setAdjustmentAmount(0);
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
  const electricAmount =
    electricUnits * electricChargePerUnit;
  const motorTotalUnits = Math.max(
    0,
    motorCurrent - motorPrevious
  );
  const motorShareUnits =
    motorTotalUnits / activeTenantsInProperty;
  const motorAmount =
    motorShareUnits * motorChargePerUnit;
  const grandTotal =
    monthlyRent +
    electricAmount +
    motorAmount +
    adjustmentAmount;

  return (
    <form
      action={formAction}
      className="relative space-y-5"
    >
      {pending && (
        <div className="absolute inset-0 z-10 grid place-items-center rounded-2xl bg-blue-950/20 backdrop-blur-sm">
          <div className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-lg">
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
            setMotorPrevious(0);
            setElectricCurrent(0);
            setMotorCurrent(0);
            setAdjustmentAmount(0);
          }}
          className="w-full rounded-xl border border-blue-100 bg-white p-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <option value="">
            Select Tenant
          </option>

          {tenants.map((tenantOption) => (
            <option
              key={tenantOption.id}
              value={tenantOption.id}
            >
              {tenantOption.name}
            </option>
          ))}
        </select>

        {tenant && property && (
          <div className="space-y-2 rounded-2xl border border-blue-100 bg-white p-5">
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">
                Property
              </span>
              <span className="text-right font-medium text-slate-900">
                {property.name}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-500">
                Rental Unit
              </span>
              <span className="text-right font-medium text-slate-900">
                {tenant.rentalUnit.name}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-500">
                Monthly Rent
              </span>
              <span className="text-right font-medium text-slate-900">
                ₹ {formatAmount(tenant.monthlyRent)}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-500">
                Electric Charge / Unit
              </span>
              <span className="text-right font-medium text-slate-900">
                ₹ {formatAmount(tenant.electricChargePerUnit)}/Unit
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-500">
                Motor Charge / Unit
              </span>
              <span className="text-right font-medium text-slate-900">
                ₹ {formatAmount(property.motorChargePerUnit)}/Unit split between{" "}
                {activeTenantsInProperty} tenant
                {activeTenantsInProperty === 1 ? "" : "s"}
              </span>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <label
            htmlFor="month"
            className="text-sm font-medium text-slate-600"
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
            }}
            required
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">
              Previous Electric Reading
            </label>
            <GlassInput
              value={electricPrevious}
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">
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

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">
              Previous Motor Reading
            </label>
            <GlassInput
              value={motorPrevious}
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">
              Current Motor Reading
            </label>
            <GlassInput
              type="number"
              name="motorCurrent"
              value={numberValue(motorCurrent)}
              onChange={(event) =>
                setMotorCurrent(
                  Number(event.target.value)
                )
              }
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-600">
            Adjustment Amount
          </label>
          <GlassInput
            type="number"
            name="adjustmentAmount"
            value={
              adjustmentAmount === 0
                ? "0"
                : String(adjustmentAmount)
            }
            onChange={(event) =>
              setAdjustmentAmount(
                Number(event.target.value)
              )
            }
          />
          <p className="text-sm text-slate-500">
            Use adjustment for custom sharing, deduction, discount, or extra contribution. Example: Tenant A +400, Tenant B -400.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-blue-100 bg-white p-5">
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">
              Monthly Rent
            </span>
            <span className="text-right font-semibold text-slate-900">
              ₹ {formatAmount(monthlyRent)}
            </span>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-slate-900">Electric</p>
            <p className="text-slate-600">
              {formatAmount(electricUnits)} Units x ₹
              {formatAmount(electricChargePerUnit)}/Unit = ₹{" "}
              {formatAmount(electricAmount)}
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-slate-900">Motor</p>
            <p className="text-slate-600">
              {formatAmount(motorTotalUnits)} Units /{" "}
              {activeTenantsInProperty} tenant
              {activeTenantsInProperty === 1 ? "" : "s"} ={" "}
              {formatAmount(motorShareUnits)} Units x ₹
              {formatAmount(motorChargePerUnit)}/Unit = ₹{" "}
              {formatAmount(motorAmount)}
            </p>
          </div>

          {adjustmentAmount !== 0 && (
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">
                Adjustment
              </span>
              <span className="text-right font-semibold text-slate-900">
                ₹ {formatAmount(adjustmentAmount)}
              </span>
            </div>
          )}

          <hr className="border-blue-100" />

          <div className="flex justify-between gap-4">
            <span className="text-xl font-bold text-slate-900">
              Grand Total
            </span>
            <span className="text-xl font-bold text-blue-600">
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

        <div className="flex gap-3">
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
              className="rounded-xl border border-blue-100 px-6 text-slate-700 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Cancel
            </button>
          )}
        </div>
      </fieldset>
    </form>
  );
}
