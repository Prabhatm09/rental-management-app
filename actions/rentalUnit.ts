"use server";

import { prisma } from "@/lib/prisma";
import { requireOwner } from "@/lib/owner";
import { revalidatePath } from "next/cache";

function revalidateRentalUnitViews() {
  revalidatePath("/rental-units");
  revalidatePath("/tenants");
  revalidatePath("/bills");
  revalidatePath("/dashboard");
  revalidatePath("/properties");
}

export async function getRentalUnits() {
  const owner = await requireOwner();

  return await prisma.rentalUnit.findMany({
    where: {
      property: {
        ownerId: owner.id,
      },
    },
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
  const owner = await requireOwner();

  return await prisma.property.findMany({
    where: {
      isArchived: false,
      ownerId: owner.id,
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function createRentalUnit(formData: FormData) {
  const owner = await requireOwner();
  const name = formData.get("name")?.toString().trim();
  const propertyId = formData.get("propertyId")?.toString();
  const participatesInMotor =
    formData.get("participatesInMotor") === "on";

  if (!name || !propertyId) {
    throw new Error("All fields are required.");
  }

  const property = await prisma.property.findFirst({
    where: {
      id: propertyId,
      ownerId: owner.id,
      isArchived: false,
    },
    select: {
      id: true,
    },
  });

  if (!property) {
    throw new Error("Property not found.");
  }

  const existingUnit = await prisma.rentalUnit.findFirst({
    where: {
      propertyId: property.id,
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
      propertyId: property.id,
      participatesInMotor,
    },
  });

  revalidateRentalUnitViews();
}

export async function updateRentalUnit(formData: FormData) {
  const owner = await requireOwner();
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString().trim();
  const propertyId = formData.get("propertyId")?.toString();
  const participatesInMotor =
    formData.get("participatesInMotor") === "on";

  if (!id || !name || !propertyId) {
    throw new Error("All fields are required.");
  }

  const [unit, destinationProperty] = await Promise.all([
    prisma.rentalUnit.findFirst({
      where: {
        id,
        property: {
          ownerId: owner.id,
        },
      },
      select: {
        id: true,
      },
    }),
    prisma.property.findFirst({
      where: {
        id: propertyId,
        ownerId: owner.id,
        isArchived: false,
      },
      select: {
        id: true,
      },
    }),
  ]);

  if (!unit || !destinationProperty) {
    throw new Error("Rental unit or property not found.");
  }

  const existingUnit = await prisma.rentalUnit.findFirst({
    where: {
      id: {
        not: id,
      },
      propertyId: destinationProperty.id,
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
      id: unit.id,
    },
    data: {
      name,
      propertyId: destinationProperty.id,
      participatesInMotor,
    },
  });

  revalidateRentalUnitViews();
}

export async function deleteRentalUnit(id: string) {
  const owner = await requireOwner();

  const unit = await prisma.rentalUnit.findFirst({
    where: {
      id,
      property: {
        ownerId: owner.id,
      },
    },
    select: {
      id: true,
    },
  });

  if (!unit) {
    return {
      ok: false,
      message: "Rental unit not found.",
    };
  }

  const tenantCount = await prisma.tenant.count({
    where: {
      rentalUnitId: unit.id,
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
      id: unit.id,
    },
  });

  revalidateRentalUnitViews();

  return {
    ok: true,
    message: "Rental unit deleted.",
  };
}
