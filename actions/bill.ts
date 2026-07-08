"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

export type BillActionState = {
  ok: boolean;
  message: string;
};

const BILL_ACTION_INITIAL_STATE: BillActionState = {
  ok: false,
  message: "",
};

const PAYMENT_STATUSES = {
  PAID: "PAID",
  PARTIAL: "PARTIAL",
  UNPAID: "UNPAID",
} as const;

function revalidateBillingViews() {
  revalidatePath("/bills");
  revalidatePath("/dashboard");
  revalidatePath("/tenants");
  revalidatePath("/properties");
}

function getNumber(formData: FormData, key: string) {
  const value = formData.get(key);
  if (value === null || value === "") return 0;
  return Number(value);
}

function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function previousMonth(date: Date) {
  return new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    1
  );
}

function formatAmount(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(value);
}

function buildShareMessage(input: {
  tenantName: string;
  month: Date;
  rent: number;
  electricPrevious: number;
  electricCurrent: number;
  electricUnits: number;
  electricChargePerUnit: number;
  electricAmount: number;
  motorPrevious: number;
  motorCurrent: number;
  motorTotalUnits: number;
  motorShareUnits: number;
  motorShareTenantCount: number;
  motorRate: number;
  motorAmount: number;
  adjustmentAmount: number;
  total: number;
  paidAmount: number;
  dueAmount: number;
  status: string;
}) {
  const adjustmentLine =
    input.adjustmentAmount !== 0
      ? `Adjustment: Rs ${formatAmount(input.adjustmentAmount)}\n`
      : "";

  return `${input.tenantName} bill for ${formatMonth(input.month)}
${formatMonth(input.month)} rent with ${formatMonth(previousMonth(input.month))} electricity usage

Rent: Rs ${formatAmount(input.rent)}

Electric: ${input.electricCurrent} - ${input.electricPrevious} = ${formatAmount(input.electricUnits)} units x Rs ${formatAmount(input.electricChargePerUnit)}/unit = Rs ${formatAmount(input.electricAmount)}

Motor: ${input.motorCurrent} - ${input.motorPrevious} = ${formatAmount(input.motorTotalUnits)} units
Share: ${formatAmount(input.motorTotalUnits)} / ${input.motorShareTenantCount} tenants = ${formatAmount(input.motorShareUnits)} units x Rs ${formatAmount(input.motorRate)}/unit = Rs ${formatAmount(input.motorAmount)}

${adjustmentLine}Total amount = Rs ${formatAmount(input.total)}
Paid = Rs ${formatAmount(input.paidAmount)}
Due = Rs ${formatAmount(input.dueAmount)}
Status = ${input.status}`;
}

async function updateBillPaymentSummary(billId: string) {
  const bill = await prisma.bill.findUnique({
    where: {
      id: billId,
    },
    include: {
      tenant: true,
      payments: true,
    },
  });

  if (!bill) {
    throw new Error("Bill not found.");
  }

  const paidAmount = bill.payments.reduce(
    (total, payment) => total + payment.amount,
    0
  );
  const dueAmount = Math.max(0, bill.total - paidAmount);
  const status =
    dueAmount <= 0
      ? PAYMENT_STATUSES.PAID
      : paidAmount > 0
        ? PAYMENT_STATUSES.PARTIAL
        : PAYMENT_STATUSES.UNPAID;

  const shareMessage = buildShareMessage({
    tenantName: bill.tenant.name,
    month: bill.month,
    rent: bill.rent,
    electricPrevious: bill.electricPrevious,
    electricCurrent: bill.electricCurrent,
    electricUnits: bill.electricUnits,
    electricChargePerUnit: bill.electricChargePerUnit,
    electricAmount: bill.electricAmount,
    motorPrevious: bill.motorPrevious,
    motorCurrent: bill.motorCurrent,
    motorTotalUnits: bill.motorTotalUnits,
    motorShareUnits: bill.motorShareUnits,
    motorShareTenantCount: bill.motorShareTenantCount,
    motorRate: bill.motorRate,
    motorAmount: bill.motorAmount,
    adjustmentAmount: bill.adjustmentAmount,
    total: bill.total,
    paidAmount,
    dueAmount,
    status,
  });

  return prisma.bill.update({
    where: {
      id: billId,
    },
    data: {
      paidAmount,
      dueAmount,
      status,
      shareMessage,
    },
  });
}

export async function getBills() {
  return prisma.bill.findMany({
    include: {
      tenant: {
        include: {
          rentalUnit: {
            include: {
              property: true,
            },
          },
        },
      },
      payments: {
        orderBy: {
          paidAt: "desc",
        },
      },
    },
    orderBy: {
      month: "desc",
    },
  });
}

export async function getTenants() {
  return prisma.tenant.findMany({
    where: {
      isActive: true,
    },
    include: {
      rentalUnit: {
        include: {
          property: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function createBill(formData: FormData) {
  return createBillAction(BILL_ACTION_INITIAL_STATE, formData);
}

export async function createBillAction(
  _state: BillActionState,
  formData: FormData
): Promise<BillActionState> {
  const tenantId = String(formData.get("tenantId") ?? "");
  const month = new Date(String(formData.get("month") ?? ""));

  if (!tenantId || Number.isNaN(month.getTime())) {
    return {
      ok: false,
      message: "Select a tenant and billing month.",
    };
  }

  const tenant = await prisma.tenant.findUnique({
    where: {
      id: tenantId,
    },
    include: {
      rentalUnit: {
        include: {
          property: true,
        },
      },
    },
  });

  if (!tenant) {
    return {
      ok: false,
      message: "Tenant not found.",
    };
  }

  const billMonthStart = new Date(
    month.getFullYear(),
    month.getMonth(),
    1
  );
  const tenantStartMonth = new Date(
    tenant.startMonth.getFullYear(),
    tenant.startMonth.getMonth(),
    1
  );

  if (billMonthStart < tenantStartMonth) {
    return {
      ok: false,
      message:
        "Bill month cannot be before tenant start date.",
    };
  }

  const alreadyExists = await prisma.bill.findFirst({
    where: {
      tenantId,
      month,
    },
  });

  if (alreadyExists) {
    return {
      ok: false,
      message: "Bill already generated for this month.",
    };
  }

  const electricCurrent = getNumber(formData, "electricCurrent");
  const motorCurrent = getNumber(formData, "motorCurrent");
  const adjustmentAmount = getNumber(
    formData,
    "adjustmentAmount"
  );

  if (
    [electricCurrent, motorCurrent, adjustmentAmount].some(
      (value) => Number.isNaN(value)
    )
  ) {
    return {
      ok: false,
      message: "Enter valid readings and adjustment.",
    };
  }

  const previousElectricBill = await prisma.bill.findFirst({
    where: {
      tenantId,
      month: {
        lt: month,
      },
    },
    orderBy: {
      month: "desc",
    },
  });

  const previousMotorBill = await prisma.bill.findFirst({
    where: {
      month: {
        lt: month,
      },
      tenant: {
        rentalUnit: {
          propertyId: tenant.rentalUnit.propertyId,
        },
      },
    },
    orderBy: {
      month: "desc",
    },
  });

  const activeTenantsInProperty = await prisma.tenant.count({
    where: {
      isActive: true,
      rentalUnit: {
        propertyId: tenant.rentalUnit.propertyId,
      },
    },
  });

  if (activeTenantsInProperty <= 0) {
    return {
      ok: false,
      message: "No active tenants found in this property.",
    };
  }

  const electricPrevious =
    previousElectricBill?.electricCurrent ??
    tenant.initialElectricReading;
  const motorPrevious =
    previousMotorBill?.motorCurrent ??
    tenant.rentalUnit.property.motorInitialReading;

  if (electricCurrent < electricPrevious) {
    return {
      ok: false,
      message:
        "Current electric reading cannot be lower than previous electric reading.",
    };
  }

  if (motorCurrent < motorPrevious) {
    return {
      ok: false,
      message:
        "Current motor reading cannot be lower than previous motor reading.",
    };
  }

  const rent = tenant.monthlyRent;
  const electricUnits = electricCurrent - electricPrevious;
  const electricAmount =
    electricUnits * tenant.electricChargePerUnit;
  const motorTotalUnits = motorCurrent - motorPrevious;
  const motorShareUnits =
    motorTotalUnits / activeTenantsInProperty;
  const motorRate =
    tenant.rentalUnit.property.motorChargePerUnit;
  const motorAmount = motorShareUnits * motorRate;
  const total =
    rent + electricAmount + motorAmount + adjustmentAmount;
  const paidAmount = 0;
  const dueAmount = total;
  const status = PAYMENT_STATUSES.UNPAID;

  const shareMessage = buildShareMessage({
    tenantName: tenant.name,
    month,
    rent,
    electricPrevious,
    electricCurrent,
    electricUnits,
    electricChargePerUnit: tenant.electricChargePerUnit,
    electricAmount,
    motorPrevious,
    motorCurrent,
    motorTotalUnits,
    motorShareUnits,
    motorShareTenantCount: activeTenantsInProperty,
    motorRate,
    motorAmount,
    adjustmentAmount,
    total,
    paidAmount,
    dueAmount,
    status,
  });

  await prisma.bill.create({
    data: {
      tenantId,
      month,
      rent,
      electricPrevious,
      electricCurrent,
      electricUnits,
      electricChargePerUnit: tenant.electricChargePerUnit,
      electricAmount,
      motorPrevious,
      motorCurrent,
      motorUnits: motorShareUnits,
      motorTotalUnits,
      motorShareUnits,
      motorShareTenantCount: activeTenantsInProperty,
      motorRate,
      motorAmount,
      adjustmentAmount,
      total,
      paidAmount,
      dueAmount,
      status,
      shareMessage,
    },
  });

  revalidateBillingViews();

  return {
    ok: true,
    message: "Bill generated.",
  };
}

export async function createPayment(formData: FormData) {
  const billId = String(formData.get("billId") ?? "");
  const amount = getNumber(formData, "amount");
  const method = formData.get("method")?.toString() || null;
  const note = formData.get("note")?.toString().trim() || null;
  const paidAtValue = formData.get("paidAt")?.toString();
  const paidAt = paidAtValue ? new Date(paidAtValue) : new Date();

  if (!billId) {
    throw new Error("Bill is required.");
  }

  if (Number.isNaN(amount) || amount <= 0) {
    throw new Error("Payment amount must be greater than 0.");
  }

  if (Number.isNaN(paidAt.getTime())) {
    throw new Error("Payment date is invalid.");
  }

  const bill = await prisma.bill.findUnique({
    where: {
      id: billId,
    },
  });

  if (!bill) {
    throw new Error("Bill not found.");
  }

  if (amount > bill.dueAmount) {
    throw new Error("Payment cannot exceed due amount.");
  }

  await prisma.payment.create({
    data: {
      billId,
      amount,
      method,
      note,
      paidAt,
    },
  });

  await updateBillPaymentSummary(billId);

  revalidateBillingViews();
}

export async function deletePayment(formData: FormData) {
  const paymentId = String(formData.get("paymentId") ?? "");

  if (!paymentId) {
    throw new Error("Payment is required.");
  }

  const payment = await prisma.payment.findUnique({
    where: {
      id: paymentId,
    },
  });

  if (!payment) {
    throw new Error("Payment not found.");
  }

  await prisma.payment.delete({
    where: {
      id: paymentId,
    },
  });

  await updateBillPaymentSummary(payment.billId);

  revalidateBillingViews();
}

export async function deleteBill(id: string) {
  await prisma.bill.delete({
    where: {
      id,
    },
  });

  revalidateBillingViews();
}

export async function deleteBillAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) {
    throw new Error("Bill is required.");
  }

  await deleteBill(id);
}
