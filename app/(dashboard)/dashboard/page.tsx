import { connection } from "next/server";

import { prisma } from "@/lib/prisma";
import { requireOwner } from "@/lib/owner";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function formatMonth(value: Date) {
  return new Date(value).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
}

export default async function DashboardPage() {
  await connection();
  const owner = await requireOwner();

  const now = new Date();
  const todayStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const tomorrowStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
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
  ] = await Promise.all([
    prisma.property.count({
      where: {
        isArchived: false,
        ownerId: owner.id,
      },
    }),
    prisma.rentalUnit.count({
      where: {
        property: {
          ownerId: owner.id,
        },
      },
    }),
    prisma.tenant.count({
      where: {
        isActive: true,
        rentalUnit: {
          property: {
            ownerId: owner.id,
          },
        },
      },
    }),
    prisma.rentalUnit.count({
      where: {
        property: {
          ownerId: owner.id,
        },
        tenants: {
          none: {
            isActive: true,
          },
        },
      },
    }),
  ]);

  const [todayCollection, monthCollection, dueTotal, governmentOutstanding] =
    await Promise.all([
      prisma.payment.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          bill: {
            tenant: {
              rentalUnit: {
                property: {
                  ownerId: owner.id,
                },
              },
            },
          },
          paidAt: {
            gte: todayStart,
            lt: tomorrowStart,
          },
        },
      }),
      prisma.payment.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          bill: {
            tenant: {
              rentalUnit: {
                property: {
                  ownerId: owner.id,
                },
              },
            },
          },
          paidAt: {
            gte: monthStart,
            lt: nextMonthStart,
          },
        },
      }),
      prisma.bill.aggregate({
        _sum: {
          dueAmount: true,
        },
        where: {
          tenant: {
            rentalUnit: {
              property: {
                ownerId: owner.id,
              },
            },
          },
        },
      }),
      prisma.propertyMonthlyReading.aggregate({
        _sum: {
          governmentOutstanding: true,
        },
        where: {
          property: {
            ownerId: owner.id,
          },
        },
      }),
    ]);

  const [recentBills, highestDueBills, recentReadings, motorSummary] =
    await Promise.all([
      prisma.bill.findMany({
        where: {
          tenant: {
            rentalUnit: {
              property: {
                ownerId: owner.id,
              },
            },
          },
        },
        take: 5,
        orderBy: {
          createdAt: "desc",
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
          tenant: {
            rentalUnit: {
              property: {
                ownerId: owner.id,
              },
            },
          },
        },
        take: 6,
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
      prisma.propertyMonthlyReading.findMany({
        where: {
          property: {
            ownerId: owner.id,
          },
        },
        take: 4,
        orderBy: {
          month: "desc",
        },
        include: {
          property: true,
          bills: {
            select: {
              electricUnits: true,
            },
          },
        },
      }),
      prisma.bill.aggregate({
        _sum: {
          calculatedMotorAmount: true,
          motorAdjustmentAmount: true,
          finalMotorAmount: true,
        },
        where: {
          tenant: {
            rentalUnit: {
              property: {
                ownerId: owner.id,
              },
            },
          },
          month: {
            gte: monthStart,
            lt: nextMonthStart,
          },
        },
      }),
    ]);

  const statCards = [
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

  const moneyCards = [
    {
      label: "Today's Collection",
      value: currency.format(
        todayCollection._sum.amount ?? 0
      ),
      tone: "text-[var(--success)]",
    },
    {
      label: "Current Month Collection",
      value: currency.format(
        monthCollection._sum.amount ?? 0
      ),
      tone: "text-[var(--success)]",
    },
    {
      label: "Outstanding Amount",
      value: currency.format(
        dueTotal._sum.dueAmount ?? 0
      ),
      tone: "text-[var(--accent)]",
    },
    {
      label: "Reading Reference",
      value: currency.format(
        governmentOutstanding._sum
          .governmentOutstanding ?? 0
      ),
      tone: "text-[var(--warning)]",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm font-medium text-[var(--muted)]">
          Collections, dues, meter checks, and recent billing activity.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className="premium-card p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:text-sm">
              {stat.label}
            </p>
            <p className="number-text mt-2 text-2xl font-black text-[var(--ink)]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {moneyCards.map((card) => (
          <div
            key={card.label}
            className="premium-card p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
              {card.label}
            </p>
            <p className={`money-text mt-2 text-2xl font-black ${card.tone}`}>
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <section className="premium-section p-4">
          <h2 className="text-lg font-black text-[var(--ink)]">
            Reading Reference
          </h2>
          <div className="mt-4 space-y-3">
            {recentReadings.map((reading) => {
              const tenantUnits = reading.bills.reduce(
                (total, bill) => total + bill.electricUnits,
                0
              );
              const difference =
                reading.governmentUnits - tenantUnits;

              return (
                <div
                  key={reading.id}
                  className="premium-cell p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[var(--ink)]">
                        {reading.property.name}
                      </p>
                      <p className="text-sm text-[var(--muted)]">
                        {formatMonth(reading.month)}
                      </p>
                    </div>
                    {Math.abs(difference) > 0.001 && (
                      <span className="rounded-full bg-amber-500/10 px-2 py-1 text-xs font-semibold text-[var(--warning)]">
                        Mismatch
                      </span>
                    )}
                  </div>
                  <p className="number-text mt-2 text-sm text-[var(--muted)]">
                    Govt {reading.governmentUnits} · Tenant{" "}
                    {tenantUnits} · Difference {difference}
                  </p>
                </div>
              );
            })}
            {recentReadings.length === 0 && (
              <p className="text-sm text-[var(--muted)]">
                No property readings yet.
              </p>
            )}
          </div>
        </section>

        <section className="premium-section p-4">
          <h2 className="text-lg font-black text-[var(--ink)]">
            Motor Summary
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="premium-cell p-3">
              <dt className="text-sm text-[var(--muted)]">
                Calculated
              </dt>
              <dd className="money-text font-black text-[var(--ink)]">
                {currency.format(
                  motorSummary._sum
                    .calculatedMotorAmount ?? 0
                )}
              </dd>
            </div>
            <div className="premium-cell p-3">
              <dt className="text-sm text-[var(--muted)]">
                Adjustment
              </dt>
              <dd className="money-text font-black text-[var(--ink)]">
                {currency.format(
                  motorSummary._sum
                    .motorAdjustmentAmount ?? 0
                )}
              </dd>
            </div>
            <div className="premium-cell p-3">
              <dt className="text-sm text-[var(--muted)]">Final</dt>
              <dd className="money-text font-black text-[var(--ink)]">
                {currency.format(
                  motorSummary._sum.finalMotorAmount ?? 0
                )}
              </dd>
            </div>
          </dl>
        </section>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <section className="premium-section p-4">
          <h2 className="text-lg font-black text-[var(--ink)]">
            Recent Bills
          </h2>
          <div className="mt-4 space-y-3">
            {recentBills.map((bill) => (
              <div
                key={bill.id}
                className="premium-cell flex items-center justify-between gap-3 p-3"
              >
                <div>
                  <p className="font-semibold text-[var(--ink)]">
                    {bill.tenant.name}
                  </p>
                  <p className="text-sm text-[var(--muted)]">
                    {bill.tenant.rentalUnit.property.name} ·{" "}
                    {formatMonth(bill.month)}
                  </p>
                </div>
                <p className="money-text font-black text-[var(--ink)]">
                  {currency.format(bill.total)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="premium-section p-4">
          <h2 className="text-lg font-black text-[var(--ink)]">
            Highest Due Bills
          </h2>
          <div className="mt-4 space-y-3">
            {highestDueBills.map((bill) => (
              <div
                key={bill.id}
                className="premium-cell flex items-center justify-between gap-3 p-3"
              >
                <div>
                  <p className="font-semibold text-[var(--ink)]">
                    {bill.tenant.name}
                  </p>
                  <p className="text-sm text-[var(--muted)]">
                    {bill.tenant.rentalUnit.property.name} ·{" "}
                    {formatMonth(bill.month)}
                  </p>
                </div>
                <p className="money-text font-black text-[var(--accent)]">
                  {currency.format(bill.dueAmount)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
