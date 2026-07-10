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
      _count: {
        select: {
          tenants: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProperties() {
  return await prisma.property.findMany({
    where: {
      isArchived: false,
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function createRentalUnit(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const propertyId = formData.get("propertyId")?.toString();
  const participatesInMotor =
    formData.get("participatesInMotor") === "on";

  if (!name || !propertyId) {
    throw new Error("All fields are required.");
  }

  const existingUnit = await prisma.rentalUnit.findFirst({
    where: {
      propertyId,
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  });

  if (existingUnit) {
    throw new Error("A rental unit with this number already exists in this property.");
  }

  await prisma.rentalUnit.create({
    data: {
      name,
      propertyId,
      participatesInMotor,
    },
  });

  revalidateRentalUnitViews();
}

export async function updateRentalUnit(formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString().trim();
  const propertyId = formData.get("propertyId")?.toString();
  const participatesInMotor =
    formData.get("participatesInMotor") === "on";

  if (!id || !name || !propertyId) {
    throw new Error("All fields are required.");
  }

  const existingUnit = await prisma.rentalUnit.findFirst({
    where: {
      id: {
        not: id,
      },
      propertyId,
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  });

  if (existingUnit) {
    throw new Error("A rental unit with this number already exists in this property.");
  }

  await prisma.rentalUnit.update({
    where: {
      id,
    },
    data: {
      name,
      propertyId,
      participatesInMotor,
    },
  });

  revalidateRentalUnitViews();
}

export async function deleteRentalUnit(id: string) {
  const tenantCount = await prisma.tenant.count({
    where: {
      rentalUnitId: id,
    },
  });

  if (tenantCount > 0) {
    return {
      ok: false,
      message:
        "Cannot delete rental unit with tenant history.",
    };
  }

  await prisma.rentalUnit.delete({
    where: {
      id,
    },
  });

  revalidateRentalUnitViews();

  return {
    ok: true,
    message: "Rental unit deleted.",
  };
}
