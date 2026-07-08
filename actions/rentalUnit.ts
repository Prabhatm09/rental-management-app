"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function revalidateRentalUnitViews() {
  revalidatePath("/rental-units");
  revalidatePath("/tenants");
  revalidatePath("/bills");
  revalidatePath("/dashboard");
  revalidatePath("/properties");
}

export async function getRentalUnits() {
  return await prisma.rentalUnit.findMany({
    include: {
      property: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProperties() {
  return await prisma.property.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function createRentalUnit(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const propertyId = formData.get("propertyId")?.toString();

  if (!name || !propertyId) {
    throw new Error("All fields are required.");
  }

  await prisma.rentalUnit.create({
    data: {
      name,
      propertyId,
    },
  });

  revalidateRentalUnitViews();
}

export async function deleteRentalUnit(id: string) {
  await prisma.rentalUnit.delete({
    where: {
      id,
    },
  });

  revalidateRentalUnitViews();
}
