"use server";

import { prisma } from "@/lib/prisma";
import { requireOwner } from "@/lib/owner";
import { revalidatePath } from "next/cache";

function revalidatePropertyViews() {
  revalidatePath("/properties");
  revalidatePath("/rental-units");
  revalidatePath("/tenants");
  revalidatePath("/bills");
  revalidatePath("/dashboard");
}

export async function getProperties() {
  const owner = await requireOwner();

  return await prisma.property.findMany({
    where: {
      ownerId: owner.id,
    },
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
  const owner = await requireOwner();
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
      ownerId: owner.id,
    },
  });

  revalidatePropertyViews();
}

export async function updateProperty(formData: FormData) {
  const owner = await requireOwner();
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

  const property = await prisma.property.findFirst({
    where: {
      id,
      ownerId: owner.id,
    },
    select: {
      id: true,
    },
  });

  if (!property) {
    throw new Error("Property not found.");
  }

  await prisma.property.update({
    where: { id: property.id },
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
  const owner = await requireOwner();

  const property = await prisma.property.findFirst({
    where: {
      id,
      ownerId: owner.id,
    },
    select: {
      id: true,
    },
  });

  if (!property) {
    return {
      ok: false,
      message: "Property not found.",
    };
  }

  await prisma.property.update({
    where: { id: property.id },
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
  const owner = await requireOwner();

  const property = await prisma.property.findFirst({
    where: {
      id,
      ownerId: owner.id,
    },
    select: {
      id: true,
    },
  });

  if (!property) {
    return {
      ok: false,
      message: "Property not found.",
    };
  }

  await prisma.property.update({
    where: { id: property.id },
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
  const owner = await requireOwner();

  const property = await prisma.property.findFirst({
    where: {
      id,
      ownerId: owner.id,
    },
    select: {
      id: true,
    },
  });

  if (!property) {
    return {
      ok: false,
      message: "Property not found.",
    };
  }

  const [rentalUnitCount, readingCount] =
    await Promise.all([
      prisma.rentalUnit.count({
        where: {
          propertyId: property.id,
        },
      }),
      prisma.propertyMonthlyReading.count({
        where: {
          propertyId: property.id,
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
      id: property.id,
    },
  });

  revalidatePropertyViews();

  return {
    ok: true,
    message: "Property deleted.",
  };
}
