"use server";

import { prisma } from "@/lib/prisma";
import { calculateBill } from "@/lib/calculateBill";
import { revalidatePath } from "next/cache";

export async function getBills() {
  return prisma.bill.findMany({
    include: {
      tenant: {
        include: {
          property: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getTenants() {
  return prisma.tenant.findMany({
    include: {
      property: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function createBill(formData: FormData) {
  const tenantId = String(formData.get("tenantId"));
  const month = new Date(String(formData.get("month")));

  const rent = Number(formData.get("rent"));

  const electricPrevious = Number(formData.get("electricPrevious"));
  const electricCurrent = Number(formData.get("electricCurrent"));
  const electricRate = Number(formData.get("electricRate"));

  const motorPrevious = Number(formData.get("motorPrevious"));
  const motorCurrent = Number(formData.get("motorCurrent"));
  const motorRate = Number(formData.get("motorRate"));

  const bill = calculateBill(
    rent,
    electricPrevious,
    electricCurrent,
    electricRate,
    motorPrevious,
    motorCurrent,
    motorRate
  );

  await prisma.bill.create({
    data: {
      tenantId,
      month,

      rent,

      electricPrevious,
      electricCurrent,
      electricRate,

      motorPrevious,
      motorCurrent,
      motorRate,

      total: bill.total,
    },
  });

  revalidatePath("/dashboard/bills");
}

export async function deleteBill(id: string) {
  await prisma.bill.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/bills");
}