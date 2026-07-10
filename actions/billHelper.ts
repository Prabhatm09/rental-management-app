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

  const billMonthStart = new Date(
    month.getFullYear(),
    month.getMonth(),
    1
  );

  const propertyReading =
    await prisma.propertyMonthlyReading.findUnique({
      where: {
        propertyId_month: {
          propertyId: tenant.rentalUnit.propertyId,
          month: billMonthStart,
        },
      },
    });

  const participantCount = await prisma.tenant.count({
    where: {
      isActive: true,
      rentalUnit: {
        propertyId: tenant.rentalUnit.propertyId,
        participatesInMotor: true,
      },
    },
  });

  return {
    electricPrevious:
      previousElectricBill?.electricCurrent ??
      tenant.initialElectricReading,
    motorPrevious:
      propertyReading?.motorPreviousReading ??
      tenant.rentalUnit.property.motorInitialReading,
    motorCurrent: propertyReading?.motorCurrentReading ?? null,
    motorUnits: propertyReading?.motorUnits ?? null,
    motorParticipantCount: participantCount,
    participatesInMotor:
      tenant.rentalUnit.participatesInMotor,
    hasPropertyReading: Boolean(propertyReading),
  };
}
