"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getTenants() {
  return prisma.tenant.findMany({
    include: {
      property: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getPropertyOptions() {
  return prisma.property.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function createTenant(formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const propertyId = formData.get("propertyId")?.toString() || "";
  const startMonth = formData.get("startMonth")?.toString() || "";
  const endMonth = formData.get("endMonth")?.toString() || "";
  const monthlyRent = Number(formData.get("monthlyRent"));

  await prisma.tenant.create({
    data: {
      name,
      phone,
      propertyId,
      startMonth: new Date(startMonth),
      endMonth: endMonth ? new Date(endMonth) : null,
      monthlyRent,
    },
  });

  revalidatePath("/dashboard/tenants");
}

export async function deleteTenant(id: string) {
  await prisma.tenant.delete({
    where: { id },
  });

  revalidatePath("/dashboard/tenants");
}