"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function revalidatePropertyViews() {
  revalidatePath("/properties");
  revalidatePath("/rental-units");
  revalidatePath("/tenants");
  revalidatePath("/bills");
  revalidatePath("/dashboard");
}

export async function getProperties() {
  return await prisma.property.findMany({
    include: {
      _count: {
        select: {
          units: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createProperty(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const address = formData.get("address")?.toString().trim();
  const motorInitialReading = Number(
    formData.get("motorInitialReading") || 0
  );
  const motorChargePerUnit = Number(
    formData.get("motorChargePerUnit") || 8
  );

  if (!name) {
    throw new Error("Property name is required.");
  }

  if (
    Number.isNaN(motorInitialReading) ||
    Number.isNaN(motorChargePerUnit)
  ) {
    throw new Error("Motor fields must be valid numbers.");
  }

  await prisma.property.create({
    data: {
      name,
      address,
      motorInitialReading,
      motorChargePerUnit,
    },
  });

  revalidatePropertyViews();
}

export async function deleteProperty(id: string) {
  const rentalUnitCount = await prisma.rentalUnit.count({
    where: {
      propertyId: id,
    },
  });

  if (rentalUnitCount > 0) {
    return {
      ok: false,
      message:
        "Cannot delete property. Remove rental units first.",
    };
  }

  await prisma.property.delete({
    where: {
      id,
    },
  });

  revalidatePropertyViews();

  return {
    ok: true,
    message: "Property deleted.",
  };
}
