"use client";

import { useState } from "react";

import {
  createPayment,
  deleteBillAction,
  deletePayment,
} from "@/actions/bill";
import PendingSubmitButton from "@/components/ui/PendingSubmitButton";

type Payment = {
  id: string;
  amount: number;
  method: string | null;
  note: string | null;
  paidAt: Date;
};

type Bill = {
  id: string;
  month: Date;
  rent: number;
  electricPrevious: number;
  electricCurrent: number;
  electricUnits: number;
  electricChargePerUnit: number;
  electricAmount: number;
  motorPrevious: number;
  motorCurrent: number;
  motorTotalUnits: number;
  motorShareUnits: number;
  motorShareTenantCount: number;
  motorRate: number;
  motorAmount: number;
  adjustmentAmount: number;
  total: number;
  paidAmount: number;
  dueAmount: number;
  status: string;
  shareMessage: string | null;
  payments: Payment[];
  tenant: {
    name: string;
    phone: string | null;
    rentalUnit: {
      name: string;
      property: {
        name: string;
      };
    };
  };
};

type Props = {
  bills: Bill[];
};

const paymentMethods = [
  "CASH",
  "UPI",
  "BANK_TRANSFER",
  "OTHER",
];

function formatAmount(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(value);
}

function formatMonth(value: Date) {
  return new Date(value).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
}

function formatLongMonth(value: Date) {
  return new Date(value).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
}

function previousMonth(value: Date) {
  const date = new Date(value);
  return new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    1
  );
}

function statusClass(status: string) {
  if (status === "PAID") {
    return "bg-green-50 text-green-700 ring-green-200";
  }

  if (status === "PARTIAL") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  return "bg-red-50 text-red-700 ring-red-200";
}

function normalizeIndianWhatsAppNumber(
  phone: string | null
) {
  if (!phone) return null;

  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return `91${digits}`;
  }

  if (digits.length === 12 && digits.startsWith("91")) {
    return digits;
  }

  return digits.length > 0 ? digits : null;
}

function getShareMessage(
  bill: Bill,
  overrides: Record<string, string>
) {
  return overrides[bill.id] ?? bill.shareMessage ?? "";
}

export default function BillTable({ bills }: Props) {
  const [messageOverrides, setMessageOverrides] = useState<
    Record<string, string>
  >({});
  const [copiedBillId, setCopiedBillId] =
    useState<string | null>(null);
  const [selectedBillId, setSelectedBillId] =
    useState<string | null>(null);
  const selectedBill =
    bills.find((bill) => bill.id === selectedBillId) ??
    null;

  async function copyMessage(billId: string) {
    const bill = bills.find((item) => item.id === billId);
    await navigator.clipboard.writeText(
      bill ? getShareMessage(bill, messageOverrides) : ""
    );
    setCopiedBillId(billId);
    window.setTimeout(() => {
      setCopiedBillId(null);
    }, 1500);
  }

  function openWhatsApp(bill: Bill) {
    const phone = normalizeIndianWhatsAppNumber(
      bill.tenant.phone
    );

    if (!phone) return;

    const message = getShareMessage(
      bill,
      messageOverrides
    );
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (bills.length === 0) {
    return (
      <div className="rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] p-8 text-center font-medium text-slate-500 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)]">
        No bills found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl">
        <table className="min-w-[760px] w-full">
          <thead className="border-b border-[oklch(88%_0.04_247)] text-sm text-slate-500">
            <tr>
              <th className="p-4 text-left">Tenant</th>
              <th className="p-4 text-left">Month</th>
              <th className="p-4 text-right">Total</th>
              <th className="p-4 text-right">Paid</th>
              <th className="p-4 text-right">Outstanding</th>
              <th className="p-4 text-right">Status</th>
              <th className="p-4 text-right">Detail</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr
                key={bill.id}
                onClick={() => setSelectedBillId(bill.id)}
                className={`cursor-pointer border-b border-[oklch(92%_0.035_247)] transition last:border-0 ${
                  selectedBillId === bill.id
                    ? "bg-[oklch(94%_0.055_250)]"
                    : "hover:bg-[oklch(96%_0.035_250)]"
                }`}
              >
                <td className="p-4 font-medium text-slate-900">
                  {bill.tenant.name}
                </td>
                <td className="p-4 text-slate-600">
                  {formatMonth(bill.month)}
                </td>
                <td className="p-4 text-right text-slate-700">
                  ₹ {formatAmount(bill.total)}
                </td>
                <td className="p-4 text-right text-green-700">
                  ₹ {formatAmount(bill.paidAmount)}
                </td>
                <td className="p-4 text-right font-semibold text-blue-700">
                  ₹ {formatAmount(bill.dueAmount)}
                </td>
                <td className="p-4 text-right">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClass(
                      bill.status
                    )}`}
                  >
                    {bill.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button
                    type="button"
                    className="rounded-full border border-[oklch(80%_0.08_252)] bg-[oklch(99%_0.006_250)] px-3 py-1 text-xs font-semibold text-blue-700 hover:border-blue-500"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedBillId(bill.id);
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!selectedBill && (
        <div className="rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.72)] p-8 text-center text-slate-500 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl">
          Select a tenant bill from the table to view payment, reading details, and share message.
        </div>
      )}

      {selectedBill && (
        <article
          key={selectedBill.id}
          className="rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] p-4 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl md:p-5"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-950">
                {selectedBill.tenant.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {selectedBill.tenant.rentalUnit.property.name} ·{" "}
                {selectedBill.tenant.rentalUnit.name} · Rent:{" "}
                {formatLongMonth(selectedBill.month)} · Electricity:{" "}
                {formatLongMonth(previousMonth(selectedBill.month))}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClass(
                selectedBill.status
              )}`}
            >
              {selectedBill.status}
            </span>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[18px] border border-[oklch(88%_0.04_247)] bg-[oklch(94%_0.055_250/0.72)] p-4">
              <p className="text-xs font-medium text-slate-500">
                Rent
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                ₹ {formatAmount(selectedBill.rent)}
              </p>
            </div>

            <div className="rounded-[18px] border border-[oklch(88%_0.04_247)] bg-[oklch(94%_0.055_250/0.72)] p-4">
              <p className="text-xs font-medium text-slate-500">
                Electric
              </p>
              <p className="mt-1 text-sm text-slate-700">
                {formatAmount(selectedBill.electricCurrent)} -{" "}
                {formatAmount(selectedBill.electricPrevious)} ={" "}
                {formatAmount(selectedBill.electricUnits)} units x ₹
                {formatAmount(selectedBill.electricChargePerUnit)}
              </p>
              <p className="font-semibold text-slate-900">
                ₹ {formatAmount(selectedBill.electricAmount)}
              </p>
            </div>

            <div className="rounded-[18px] border border-[oklch(88%_0.04_247)] bg-[oklch(94%_0.055_250/0.72)] p-4">
              <p className="text-xs font-medium text-slate-500">
                Motor
              </p>
              <p className="mt-1 text-sm text-slate-700">
                {formatAmount(selectedBill.motorCurrent)} -{" "}
                {formatAmount(selectedBill.motorPrevious)} ={" "}
                {formatAmount(selectedBill.motorTotalUnits)} total units,
                {formatAmount(selectedBill.motorTotalUnits)} /{" "}
                {selectedBill.motorShareTenantCount} tenants =
                share {formatAmount(selectedBill.motorShareUnits)} units
              </p>
              <p className="font-semibold text-slate-900">
                ₹ {formatAmount(selectedBill.motorAmount)}
              </p>
            </div>

            <div className="rounded-[18px] border border-[oklch(88%_0.04_247)] bg-[oklch(94%_0.055_250/0.72)] p-4">
              <p className="text-xs font-medium text-slate-500">
                Adjustment
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                ₹ {formatAmount(selectedBill.adjustmentAmount)}
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-[18px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.72)] p-4">
              <p className="text-xs font-medium text-slate-500">
                Total
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">
                ₹ {formatAmount(selectedBill.total)}
              </p>
            </div>

            <div className="rounded-[18px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.72)] p-4">
              <p className="text-xs font-medium text-slate-500">
                Paid
              </p>
              <p className="mt-1 text-lg font-bold text-green-700">
                ₹ {formatAmount(selectedBill.paidAmount)}
              </p>
            </div>

            <div className="rounded-[18px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.72)] p-4">
              <p className="text-xs font-medium text-slate-500">
                Due
              </p>
              <p className="mt-1 text-lg font-bold text-blue-600">
                ₹ {formatAmount(selectedBill.dueAmount)}
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(320px,0.9fr)_minmax(360px,1.2fr)]">
            <div className="rounded-[22px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.72)] p-4">
              <h3 className="font-semibold text-slate-900">
                Record Payment
              </h3>

              {selectedBill.status === "PAID" ||
              selectedBill.dueAmount <= 0 ? (
                <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  Fully paid. Delete a payment below if you need to correct it.
                </div>
              ) : (
                <form
                  action={createPayment}
                  className="mt-4 space-y-3"
                >
                  <input
                    type="hidden"
                    name="billId"
                    value={selectedBill.id}
                  />

                  <input
                    type="number"
                    name="amount"
                    min="1"
                    max={selectedBill.dueAmount}
                    placeholder="Amount"
                    className="min-h-12 w-full rounded-[16px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250)] px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-[oklch(82%_0.12_252/45%)]"
                    required
                  />

                  <select
                    name="method"
                    className="min-h-12 w-full rounded-[16px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250)] px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-[oklch(82%_0.12_252/45%)]"
                    defaultValue=""
                  >
                    <option value="">Method</option>
                    {paymentMethods.map((method) => (
                      <option
                        key={method}
                        value={method}
                      >
                        {method.replace("_", " ")}
                      </option>
                    ))}
                  </select>

                  <input
                    type="date"
                    name="paidAt"
                    className="min-h-12 w-full rounded-[16px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250)] px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-[oklch(82%_0.12_252/45%)]"
                  />

                  <input
                    name="note"
                    placeholder="Note"
                    className="min-h-12 w-full rounded-[16px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250)] px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-[oklch(82%_0.12_252/45%)]"
                  />

                  <PendingSubmitButton
                    className="w-full"
                    pendingText="Saving..."
                  >
                    Add Payment
                  </PendingSubmitButton>
                </form>
              )}

              {selectedBill.payments.length > 0 && (
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  {selectedBill.payments.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between gap-3 rounded-lg bg-blue-50/80 px-3 py-2"
                    >
                      <span>
                        ₹ {formatAmount(payment.amount)} ·{" "}
                        {payment.method ?? "Payment"} ·{" "}
                        {new Date(payment.paidAt).toLocaleDateString(
                          "en-IN"
                        )}
                      </span>
                      <form
                        action={deletePayment}
                        onSubmit={(event) => {
                          if (
                            !window.confirm(
                              "Delete this payment? You can add it again with corrected details."
                            )
                          ) {
                            event.preventDefault();
                          }
                        }}
                      >
                        <input
                          type="hidden"
                          name="paymentId"
                          value={payment.id}
                        />
                        <PendingSubmitButton
                          className="bg-transparent px-0 py-0 text-xs text-red-600 hover:bg-transparent hover:text-red-700"
                          pendingText="Deleting..."
                        >
                          Delete
                        </PendingSubmitButton>
                      </form>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-[22px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.72)] p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-semibold text-slate-900">
                  Share Message
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => copyMessage(selectedBill.id)}
                    className="rounded-[14px] border border-[oklch(80%_0.08_252)] bg-[oklch(99%_0.006_250)] px-3 py-2 text-sm font-semibold text-blue-700 hover:border-blue-500"
                  >
                    {copiedBillId === selectedBill.id
                      ? "Copied"
                      : "Copy"}
                  </button>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(selectedBill)}
                    disabled={
                      !normalizeIndianWhatsAppNumber(
                        selectedBill.tenant.phone
                      )
                    }
                    className="rounded-[14px] bg-[#2563EB] px-3 py-2 text-sm font-semibold text-white shadow-[4px_4px_0_#F7C948] hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Send WhatsApp
                  </button>
                </div>
              </div>

              {!normalizeIndianWhatsAppNumber(
                selectedBill.tenant.phone
              ) && (
                <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700">
                  Add a tenant phone number to send this message on WhatsApp.
                </p>
              )}

              <textarea
                value={
                  getShareMessage(selectedBill, messageOverrides)
                }
                onChange={(event) =>
                  setMessageOverrides((current) => ({
                    ...current,
                    [selectedBill.id]: event.target.value,
                  }))
                }
                className="mt-4 min-h-64 w-full rounded-[18px] border border-[oklch(88%_0.04_247)] bg-[oklch(94%_0.055_250/0.5)] p-4 text-sm leading-6 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-[oklch(82%_0.12_252/45%)]"
              />
            </div>
          </div>

          <form
            action={deleteBillAction}
            className="mt-4 text-right"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Delete this bill and its payments? This cannot be undone."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <input
              type="hidden"
              name="id"
              value={selectedBill.id}
            />
            <PendingSubmitButton
              className="bg-transparent px-0 py-0 text-sm text-red-600 hover:bg-transparent hover:text-red-700"
              pendingText="Deleting..."
            >
              Delete Bill
            </PendingSubmitButton>
          </form>
        </article>
      )}
    </div>
  );
}
