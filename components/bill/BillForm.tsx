"use client";

import { useMemo, useState } from "react";

import { createBill } from "@/actions/bill";
import GlassButton from "@/components/ui/GlassButton";
import GlassInput from "@/components/ui/GlassInput";

type Tenant = {
  id: string;
  name: string;
  monthlyRent: number;
};

interface Props {
  tenants: Tenant[];
}

export default function BillForm({ tenants }: Props) {
  const [rent, setRent] = useState(0);

  const [electricPrevious, setElectricPrevious] = useState(0);
  const [electricCurrent, setElectricCurrent] = useState(0);
  const [electricRate, setElectricRate] = useState(0);

  const [motorPrevious, setMotorPrevious] = useState(0);
  const [motorCurrent, setMotorCurrent] = useState(0);
  const [motorRate, setMotorRate] = useState(0);

  const bill = useMemo(() => {
    const electricUnits = electricCurrent - electricPrevious;
    const motorUnits = motorCurrent - motorPrevious;

    const electricAmount = electricUnits * electricRate;
    const motorAmount = motorUnits * motorRate;

    return {
      electricUnits,
      motorUnits,
      electricAmount,
      motorAmount,
      total: rent + electricAmount + motorAmount,
    };
  }, [
    rent,
    electricPrevious,
    electricCurrent,
    electricRate,
    motorPrevious,
    motorCurrent,
    motorRate,
  ]);

  return (
    <form action={createBill} className="space-y-5">

      <select
        name="tenantId"
        required
        className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
        onChange={(e) => {
          const tenant = tenants.find(
            (t) => t.id === e.target.value
          );

          if (tenant) {
            setRent(tenant.monthlyRent);
          }
        }}
      >
        <option value="">Select Tenant</option>

        {tenants.map((tenant) => (
          <option
            key={tenant.id}
            value={tenant.id}
            className="bg-zinc-900"
          >
            {tenant.name}
          </option>
        ))}
      </select>

      <GlassInput
        type="month"
        name="month"
        required
      />

      <GlassInput
        name="rent"
        value={rent}
        readOnly
      />

      <div className="grid grid-cols-3 gap-4">
        <GlassInput
          type="number"
          name="electricPrevious"
          placeholder="Electric Previous"
          onChange={(e) =>
            setElectricPrevious(Number(e.target.value))
          }
        />

        <GlassInput
          type="number"
          name="electricCurrent"
          placeholder="Electric Current"
          onChange={(e) =>
            setElectricCurrent(Number(e.target.value))
          }
        />

        <GlassInput
          type="number"
          name="electricRate"
          placeholder="Rate"
          onChange={(e) =>
            setElectricRate(Number(e.target.value))
          }
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <GlassInput
          type="number"
          name="motorPrevious"
          placeholder="Motor Previous"
          onChange={(e) =>
            setMotorPrevious(Number(e.target.value))
          }
        />

        <GlassInput
          type="number"
          name="motorCurrent"
          placeholder="Motor Current"
          onChange={(e) =>
            setMotorCurrent(Number(e.target.value))
          }
        />

        <GlassInput
          type="number"
          name="motorRate"
          placeholder="Rate"
          onChange={(e) =>
            setMotorRate(Number(e.target.value))
          }
        />
      </div>

      <div className="rounded-2xl bg-white/5 p-5 space-y-2">
        <p>Electric Units : {bill.electricUnits}</p>
        <p>Motor Units : {bill.motorUnits}</p>

        <p>Electric Amount : ₹ {bill.electricAmount}</p>
        <p>Motor Amount : ₹ {bill.motorAmount}</p>

        <hr className="border-white/10" />

        <h2 className="text-xl font-bold">
          Total : ₹ {bill.total}
        </h2>
      </div>

      <GlassButton
        type="submit"
        className="w-full"
      >
        Generate Bill
      </GlassButton>
    </form>
  );
}