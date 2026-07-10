import { connection } from "next/server";

import { getPayments } from "@/actions/bill";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

type Props = {
  searchParams: Promise<{
    method?: string;
    from?: string;
    to?: string;
  }>;
};

const methods = [
  "ALL",
  "CASH",
  "UPI",
  "BANK_TRANSFER",
  "OTHER",
];

function parseDate(value?: string) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function PaymentsPage({
  searchParams,
}: Props) {
  await connection();

  const params = await searchParams;
  const payments = await getPayments({
    method: params.method,
    from: parseDate(params.from),
    to: parseDate(params.to),
  });
  const total = payments.reduce(
    (sum, payment) => sum + payment.amount,
    0
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
          Payments
        </h1>
        <p className="mt-1 text-sm font-medium text-[var(--muted)]">
          Search payment history by date, method, tenant, and reference.
        </p>
      </div>

      <form className="premium-section grid gap-3 p-4 sm:grid-cols-4">
        <select
          name="method"
          defaultValue={params.method ?? "ALL"}
          className="electric-input px-4 py-2.5"
        >
          {methods.map((method) => (
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
          name="from"
          defaultValue={params.from ?? ""}
          className="electric-input px-4 py-2.5"
        />
        <input
          type="date"
          name="to"
          defaultValue={params.to ?? ""}
          className="electric-input px-4 py-2.5"
        />
        <button className="electric-primary min-h-12 rounded-[12px] px-5 py-2.5 font-semibold">
          Filter
        </button>
      </form>

      <div className="premium-section p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          Collection In View
        </p>
        <p className="money-text mt-2 text-3xl font-black text-[var(--success)]">
          {currency.format(total)}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {payments.map((payment) => (
          <article
            key={payment.id}
            className="premium-card p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-black text-[var(--ink)]">
                  {payment.bill.tenant.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {payment.bill.tenant.rentalUnit.property.name} ·{" "}
                  {payment.bill.tenant.rentalUnit.name}
                </p>
              </div>
              <p className="money-text text-right text-lg font-black text-[var(--success)]">
                {currency.format(payment.amount)}
              </p>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="premium-cell p-3">
                <dt className="text-[var(--muted)]">Method</dt>
                <dd className="font-semibold text-[var(--ink)]">
                  {payment.method?.replace("_", " ") ?? "Payment"}
                </dd>
              </div>
              <div className="premium-cell p-3">
                <dt className="text-[var(--muted)]">Paid</dt>
                <dd className="font-semibold text-[var(--ink)]">
                  {new Date(payment.paidAt).toLocaleDateString(
                    "en-IN"
                  )}
                </dd>
              </div>
              <div className="premium-cell p-3">
                <dt className="text-[var(--muted)]">Reference</dt>
                <dd className="break-words font-semibold text-[var(--ink)]">
                  {payment.transactionReference || "-"}
                </dd>
              </div>
              <div className="premium-cell p-3">
                <dt className="text-[var(--muted)]">Bill Month</dt>
                <dd className="font-semibold text-[var(--ink)]">
                  {new Date(
                    payment.bill.month
                  ).toLocaleDateString("en-IN", {
                    month: "short",
                    year: "numeric",
                  })}
                </dd>
              </div>
            </dl>

            {payment.note && (
              <p className="mt-3 rounded-[12px] border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]">
                {payment.note}
              </p>
            )}
          </article>
        ))}
      </div>

      {payments.length === 0 && (
        <div className="premium-card p-8 text-center text-[var(--muted)]">
          No payments found.
        </div>
      )}
    </div>
  );
}
