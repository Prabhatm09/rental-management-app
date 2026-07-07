"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getProperties() {
  return await prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createProperty(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const address = formData.get("address")?.toString().trim();

  if (!name) {
    throw new Error("Property name is required.");
  }

  await prisma.property.create({
    data: {
      name,
      address,
    },
  });

  revalidatePath("/dashboard/properties");
}

export async function deleteProperty(id: string) {
  const tenantCount = await prisma.tenant.count({
    where: {
      propertyId: id,
    },
  });

  if (tenantCount > 0) {
    throw new Error(
      "Cannot delete property. Remove tenants first."
    );
  }

  await prisma.property.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/properties");
}