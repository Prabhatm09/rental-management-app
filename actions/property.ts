"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getProperties() {
  return prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createProperty(formData: FormData) {
  const name = formData.get("name") as string;
  const address = formData.get("address") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const pinCode = formData.get("pinCode") as string;

  if (!name) return;

  await prisma.property.create({
    data: {
      name,
      address,
      city,
      state,
      pinCode,
    },
  });

  revalidatePath("/properties");
}

export async function deleteProperty(id: string) {
  await prisma.property.delete({
    where: { id },
  });

  revalidatePath("/properties");
}