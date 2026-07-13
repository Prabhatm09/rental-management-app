"use server";

import { prisma } from "@/lib/prisma";
import { requireOwner } from "@/lib/owner";

export async function getPreviousReading(
  tenantId: string,
  month: Date
) {
  const owner = await requireOwner();

  const tenant = await prisma.tenant.findFirst({
    where: {
      id: tenantId,
      rentalUnit: {
        property: {
          ownerId: owner.id,
        },
      },
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
      tenant: {
        rentalUnit: {
          property: {
            ownerId: owner.id,
          },
        },
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
        property: {
          ownerId: owner.id,
        },
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
