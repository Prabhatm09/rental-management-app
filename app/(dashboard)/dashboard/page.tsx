import { connection } from "next/server";

import { prisma } from "@/lib/prisma";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const month = new Intl.DateTimeFormat("en-IN", {
  month: "short",
  year: "numeric",
});

export default async function DashboardPage() {
  await connection();

  const now = new Date();
  const monthStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    1
  );
  const nextMonthStart = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    1
  );

  const [
    propertyCount,
    unitCount,
    activeTenantCount,
    vacantUnitCount,
    billCount,
    lifetimeBilled,
    monthBilled,
    paidTotal,
    dueTotal,
    recentBills,
    outstandingBills,
  ] = await Promise.all([
    prisma.property.count(),
    prisma.rentalUnit.count(),
    prisma.tenant.count({
      where: {
        isActive: true,
      },
    }),
    prisma.rentalUnit.count({
      where: {
        tenants: {
          none: {
            isActive: true,
          },
        },
      },
    }),
    prisma.bill.count(),
    prisma.bill.aggregate({
      _sum: {
        total: true,
      },
    }),
    prisma.bill.aggregate({
      _sum: {
        total: true,
      },
      where: {
        month: {
          gte: monthStart,
          lt: nextMonthStart,
        },
      },
    }),
    prisma.bill.aggregate({
      _sum: {
        paidAmount: true,
      },
    }),
    prisma.bill.aggregate({
      _sum: {
        dueAmount: true,
      },
    }),
    prisma.bill.findMany({
      take: 5,
      orderBy: {
        month: "desc",
      },
      include: {
        tenant: {
          include: {
            rentalUnit: {
              include: {
                property: true,
              },
            },
          },
        },
      },
    }),
    prisma.bill.findMany({
      where: {
        dueAmount: {
          gt: 0,
        },
      },
      take: 8,
      orderBy: {
        dueAmount: "desc",
      },
      include: {
        tenant: {
          include: {
            rentalUnit: {
              include: {
                property: true,
              },
            },
          },
        },
      },
    }),
  ]);

  const stats = [
    {
      label: "Properties",
      value: propertyCount,
    },
    {
      label: "Rental Units",
      value: unitCount,
    },
    {
      label: "Active Tenants",
      value: activeTenantCount,
    },
    {
      label: "Vacant Units",
      value: vacantUnitCount,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-950 sm:text-4xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Portfolio health, billing totals, and recent activity.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-[24px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.92)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)]"
          >
            <div
              className={`absolute right-4 top-4 h-4 w-10 ${
                index % 3 === 0
                  ? "bg-[#2563EB]"
                  : index % 3 === 1
                    ? "bg-[#EF4444]"
                    : "bg-[#F7C948]"
              }`}
            />
            <p className="text-sm font-semibold text-slate-500">
              {stat.label}
            </p>
            <p className="mt-3 text-3xl font-black text-slate-950">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-[24px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.92)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)]">
          <p className="text-sm font-semibold text-slate-500">
            Billed This Month
          </p>
          <p className="mt-3 text-3xl font-black text-blue-600">
            {currency.format(
              monthBilled._sum.total ?? 0
            )}
          </p>
        </div>

        <div className="rounded-[24px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.92)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)]">
          <p className="text-sm font-semibold text-slate-500">
            Lifetime Billed
          </p>
          <p className="mt-3 text-3xl font-black text-slate-950">
            {currency.format(
              lifetimeBilled._sum.total ?? 0
            )}
          </p>
        </div>

        <div className="rounded-[24px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.92)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)]">
          <p className="text-sm font-semibold text-slate-500">
            Bills Generated
          </p>
          <p className="mt-3 text-3xl font-black text-slate-950">
            {billCount}
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[24px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.92)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)]">
          <p className="text-sm font-semibold text-slate-500">
            Paid Amount
          </p>
          <p className="mt-3 text-3xl font-black text-green-700">
            {currency.format(
              paidTotal._sum.paidAmount ?? 0
            )}
          </p>
        </div>

        <div className="rounded-[24px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.92)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)]">
          <p className="text-sm font-semibold text-slate-500">
            Due Amount
          </p>
          <p className="mt-3 text-3xl font-black text-blue-600">
            {currency.format(
              dueTotal._sum.dueAmount ?? 0
            )}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl">
        <div className="border-b border-[oklch(88%_0.04_247)] p-5">
          <h2 className="text-xl font-black text-slate-950">
            Recent Bills
          </h2>
        </div>

        <table className="w-full min-w-[720px]">
          <thead className="border-b border-[oklch(88%_0.04_247)] text-sm text-slate-500">
            <tr>
              <th className="p-4 text-left">Tenant</th>
              <th className="p-4 text-left">Property</th>
              <th className="p-4 text-left">Month</th>
              <th className="p-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {recentBills.map((bill) => (
              <tr
                key={bill.id}
                className="border-b border-[oklch(92%_0.035_247)] last:border-0"
              >
                <td className="p-4">
                  {bill.tenant.name}
                </td>
                <td className="p-4">
                  {
                    bill.tenant.rentalUnit.property
                      .name
                  }
                </td>
                <td className="p-4">
                  {month.format(bill.month)}
                </td>
                <td className="p-4 text-right font-semibold text-blue-600">
                  {currency.format(bill.total)}
                </td>
              </tr>
            ))}

            {recentBills.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="p-8 text-center text-slate-500"
                >
                  No bills generated yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl">
        <div className="border-b border-[oklch(88%_0.04_247)] p-5">
          <h2 className="text-xl font-black text-slate-950">
            Outstanding By Tenant
          </h2>
        </div>

        <table className="w-full min-w-[720px]">
          <thead className="border-b border-[oklch(88%_0.04_247)] text-sm text-slate-500">
            <tr>
              <th className="p-4 text-left">Tenant</th>
              <th className="p-4 text-left">Property</th>
              <th className="p-4 text-left">Month</th>
              <th className="p-4 text-right">Due</th>
            </tr>
          </thead>
          <tbody>
            {outstandingBills.map((bill) => (
              <tr
                key={bill.id}
                className="border-b border-[oklch(92%_0.035_247)] last:border-0"
              >
                <td className="p-4">
                  {bill.tenant.name}
                </td>
                <td className="p-4">
                  {bill.tenant.rentalUnit.property.name}
                </td>
                <td className="p-4">
                  {month.format(bill.month)}
                </td>
                <td className="p-4 text-right font-semibold text-blue-600">
                  {currency.format(bill.dueAmount)}
                </td>
              </tr>
            ))}

            {outstandingBills.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="p-8 text-center text-slate-500"
                >
                  No outstanding dues.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
