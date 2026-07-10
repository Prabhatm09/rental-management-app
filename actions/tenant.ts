"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type TenantActionState = {
  ok: boolean;
  message: string;
};

const TENANT_ACTION_INITIAL_STATE: TenantActionState = {
  ok: false,
  message: "",
};

function revalidateTenantViews() {
  revalidatePath("/tenants");
  revalidatePath("/bills");
  revalidatePath("/dashboard");
  revalidatePath("/properties");
}

export async function getTenants() {
  return await prisma.tenant.findMany({
    include: {
      rentalUnit: {
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

export async function getRentalUnitOptions() {
  return await prisma.rentalUnit.findMany({
    where: {
      property: {
        isArchived: false,
      },
    },
    include: {
      property: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function createTenant(formData: FormData) {
  return createTenantAction(TENANT_ACTION_INITIAL_STATE, formData);
}

export async function createTenantAction(
  _state: TenantActionState,
  formData: FormData
): Promise<TenantActionState> {
  const name = formData.get("name")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const rentalUnitId =
    formData.get("rentalUnitId")?.toString() || "";

  const startMonth =
    formData.get("startMonth")?.toString() || "";

  const monthlyRent = Number(formData.get("monthlyRent"));

  const initialElectricReading = Number(
    formData.get("initialElectricReading")
  );

  const electricChargePerUnit = Number(
    formData.get("electricChargePerUnit")
  );

  if (!name || !rentalUnitId || !startMonth) {
    return {
      ok: false,
      message: "Name, rental unit, and start date are required.",
    };
  }

  if (
    [
      monthlyRent,
      initialElectricReading,
      electricChargePerUnit,
    ].some((value) => Number.isNaN(value))
  ) {
    return {
      ok: false,
      message: "Enter valid rent, meter readings, and electric charge.",
    };
  }

  if (
    monthlyRent < 0 ||
    initialElectricReading < 0 ||
    electricChargePerUnit < 0
  ) {
    return {
      ok: false,
      message: "Rent, readings, and electric charge cannot be negative.",
    };
  }

  const activeTenant = await prisma.tenant.findFirst({
    where: {
      rentalUnitId,
      isActive: true,
    },
  });

  if (activeTenant) {
    return {
      ok: false,
      message:
        "This rental unit already has an active tenant. Deactivate the current tenant first.",
    };
  }

  await prisma.tenant.create({
    data: {
      name,
      phone,

      rentalUnitId,

      startMonth: new Date(startMonth),

      isActive: true,

      monthlyRent,

      initialElectricReading,

      initialMotorReading: 0,

      electricChargePerUnit,
    },
  });

  revalidateTenantViews();

  return {
    ok: true,
    message: "Tenant saved.",
  };
}

export async function updateTenantAction(
  _state: TenantActionState,
  formData: FormData
): Promise<TenantActionState> {
  const id = formData.get("id")?.toString() || "";
  const name = formData.get("name")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const rentalUnitId =
    formData.get("rentalUnitId")?.toString() || "";
  const startMonth =
    formData.get("startMonth")?.toString() || "";
  const isActive = formData.get("isActive") === "true";
  const monthlyRent = Number(formData.get("monthlyRent"));
  const initialElectricReading = Number(
    formData.get("initialElectricReading")
  );
  const electricChargePerUnit = Number(
    formData.get("electricChargePerUnit")
  );

  if (!id || !name || !rentalUnitId || !startMonth) {
    return {
      ok: false,
      message:
        "Tenant, name, rental unit, and start date are required.",
    };
  }

  if (
    [
      monthlyRent,
      initialElectricReading,
      electricChargePerUnit,
    ].some((value) => Number.isNaN(value))
  ) {
    return {
      ok: false,
      message: "Enter valid rent, meter readings, and electric charge.",
    };
  }

  if (
    monthlyRent < 0 ||
    initialElectricReading < 0 ||
    electricChargePerUnit < 0
  ) {
    return {
      ok: false,
      message: "Rent, readings, and electric charge cannot be negative.",
    };
  }

  if (isActive) {
    const activeTenant = await prisma.tenant.findFirst({
      where: {
        id: {
          not: id,
        },
        rentalUnitId,
        isActive: true,
      },
    });

    if (activeTenant) {
      return {
        ok: false,
        message:
          "This rental unit already has an active tenant. Deactivate the current tenant first.",
      };
    }
  }

  await prisma.tenant.update({
    where: {
      id,
    },
    data: {
      name,
      phone,
      rentalUnitId,
      startMonth: new Date(startMonth),
      isActive,
      monthlyRent,
      initialElectricReading,
      electricChargePerUnit,
    },
  });

  revalidateTenantViews();

  return {
    ok: true,
    message: "Tenant updated.",
  };
}

export async function toggleTenantStatus(id: string) {
  const tenant = await prisma.tenant.findUnique({
    where: {
      id,
    },
    select: {
      isActive: true,
      rentalUnitId: true,
    },
  });

  if (!tenant) return;

  if (!tenant.isActive) {
    const activeTenant = await prisma.tenant.findFirst({
      where: {
        id: {
          not: id,
        },
        rentalUnitId: tenant.rentalUnitId,
        isActive: true,
      },
    });

    if (activeTenant) {
      throw new Error(
        "This rental unit already has an active tenant."
      );
    }
  }

  await prisma.tenant.update({
    where: {
      id,
    },
    data: {
      isActive: !tenant.isActive,
    },
  });

  revalidateTenantViews();
}

export async function deleteTenant(id: string) {
  await prisma.tenant.delete({
    where: {
      id,
    },
  });

  revalidateTenantViews();
}

export async function toggleTenantStatusAction(
  formData: FormData
) {
  const id = formData.get("id")?.toString();

  if (!id) return;

  const tenant = await prisma.tenant.findUnique({
    where: { id },
    select: {
      isActive: true,
      rentalUnitId: true,
    },
  });

  if (!tenant) return;

  if (!tenant.isActive) {
    const activeTenant = await prisma.tenant.findFirst({
      where: {
        id: {
          not: id,
        },
        rentalUnitId: tenant.rentalUnitId,
        isActive: true,
      },
    });

    if (activeTenant) {
      throw new Error(
        "This rental unit already has an active tenant."
      );
    }
  }

  await prisma.tenant.update({
    where: { id },
    data: {
      isActive: !tenant.isActive,
    },
  });

  revalidateTenantViews();
}
