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
          readings: true,
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

  if (name.length < 2) {
    throw new Error("Property name must be at least 2 characters.");
  }

  if (
    Number.isNaN(motorInitialReading) ||
    Number.isNaN(motorChargePerUnit)
  ) {
    throw new Error("Motor fields must be valid numbers.");
  }

  if (motorInitialReading < 0 || motorChargePerUnit < 0) {
    throw new Error("Motor reading and rate cannot be negative.");
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

export async function updateProperty(formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString().trim();
  const address = formData.get("address")?.toString().trim();
  const motorInitialReading = Number(
    formData.get("motorInitialReading") || 0
  );
  const motorChargePerUnit = Number(
    formData.get("motorChargePerUnit") || 8
  );

  if (!id) {
    throw new Error("Property is required.");
  }

  if (!name || name.length < 2) {
    throw new Error("Property name must be at least 2 characters.");
  }

  if (
    Number.isNaN(motorInitialReading) ||
    Number.isNaN(motorChargePerUnit)
  ) {
    throw new Error("Motor fields must be valid numbers.");
  }

  if (motorInitialReading < 0 || motorChargePerUnit < 0) {
    throw new Error("Motor reading and rate cannot be negative.");
  }

  await prisma.property.update({
    where: { id },
    data: {
      name,
      address,
      motorInitialReading,
      motorChargePerUnit,
    },
  });

  revalidatePropertyViews();
}

export async function archiveProperty(id: string) {
  await prisma.property.update({
    where: { id },
    data: {
      isArchived: true,
    },
  });

  revalidatePropertyViews();

  return {
    ok: true,
    message: "Property archived.",
  };
}

export async function restoreProperty(id: string) {
  await prisma.property.update({
    where: { id },
    data: {
      isArchived: false,
    },
  });

  revalidatePropertyViews();

  return {
    ok: true,
    message: "Property restored.",
  };
}

export async function deleteProperty(id: string) {
  const [rentalUnitCount, readingCount] =
    await Promise.all([
      prisma.rentalUnit.count({
        where: {
          propertyId: id,
        },
      }),
      prisma.propertyMonthlyReading.count({
        where: {
          propertyId: id,
        },
      }),
    ]);

  if (rentalUnitCount > 0 || readingCount > 0) {
    return {
      ok: false,
      message:
        "Cannot delete property with units or readings. Archive it instead.",
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
