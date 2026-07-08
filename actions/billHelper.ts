"use server";

import { prisma } from "@/lib/prisma";

export async function getPreviousReading(
  tenantId: string,
  month: Date
) {
  const tenant = await prisma.tenant.findUnique({
    where: {
      id: tenantId,
    },
    include: {
      rentalUnit: {
        include: {
          property: true,
        },
      },
    },
  });

  if (!tenant) return null;

  const previousElectricBill = await prisma.bill.findFirst({
    where: {
      tenantId,
      month: {
        lt: month,
      },
    },
    orderBy: {
      month: "desc",
    },
  });

  const previousMotorBill = await prisma.bill.findFirst({
    where: {
      month: {
        lt: month,
      },
      tenant: {
        rentalUnit: {
          propertyId: tenant.rentalUnit.propertyId,
        },
      },
    },
    orderBy: {
      month: "desc",
    },
  });

  return {
    electricPrevious:
      previousElectricBill?.electricCurrent ??
      tenant.initialElectricReading,
    motorPrevious:
      previousMotorBill?.motorCurrent ??
      tenant.rentalUnit.property.motorInitialReading,
  };
}
