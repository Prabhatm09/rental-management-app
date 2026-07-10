"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
import { calculateBill } from "@/lib/calculateBill";

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
  revalidatePath("/payments");
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
  electricAdjustmentAmount: number;
  finalElectricAmount: number;
  motorPrevious: number;
  motorCurrent: number;
  motorTotalUnits: number;
  motorShareUnits: number;
  motorShareTenantCount: number;
  motorRate: number;
  motorAmount: number;
  motorAdjustmentAmount: number;
  finalMotorAmount: number;
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
  const motorAdjustmentLine =
    input.motorAdjustmentAmount !== 0
      ? `Motor adjustment: Rs ${formatAmount(input.motorAdjustmentAmount)}\nFinal motor: Rs ${formatAmount(input.finalMotorAmount)}\n`
      : "";

  return `${input.tenantName} bill for ${formatMonth(input.month)}
${formatMonth(input.month)} rent with ${formatMonth(previousMonth(input.month))} electricity usage

Rent: Rs ${formatAmount(input.rent)}

Electric: ${input.electricCurrent} - ${input.electricPrevious} = ${formatAmount(input.electricUnits)} units x Rs ${formatAmount(input.electricChargePerUnit)}/unit = Rs ${formatAmount(input.electricAmount)}

Motor: ${input.motorCurrent} - ${input.motorPrevious} = ${formatAmount(input.motorTotalUnits)} units
Share: ${formatAmount(input.motorTotalUnits)} / ${input.motorShareTenantCount} tenants = ${formatAmount(input.motorShareUnits)} units x Rs ${formatAmount(input.motorRate)}/unit = Rs ${formatAmount(input.motorAmount)}
${motorAdjustmentLine}

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
    electricAdjustmentAmount:
      bill.electricAdjustmentAmount,
    finalElectricAmount:
      bill.finalElectricAmount || bill.electricAmount,
    motorPrevious: bill.motorPrevious,
    motorCurrent: bill.motorCurrent,
    motorTotalUnits: bill.motorTotalUnits,
    motorShareUnits: bill.motorShareUnits,
    motorShareTenantCount: bill.motorShareTenantCount,
    motorRate: bill.motorRate,
    motorAmount: bill.motorAmount,
    motorAdjustmentAmount: bill.motorAdjustmentAmount,
    finalMotorAmount:
      bill.finalMotorAmount || bill.motorAmount,
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
      rentalUnit: {
        property: {
          isArchived: false,
        },
      },
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
      month: billMonthStart,
    },
  });

  if (alreadyExists) {
    return {
      ok: false,
      message: "Bill already generated for this month.",
    };
  }

  const electricCurrent = getNumber(
    formData,
    "electricCurrent"
  );
  const electricAdjustmentAmount = 0;
  const motorAdjustmentAmount = getNumber(
    formData,
    "motorAdjustmentAmount"
  );
  const otherAdjustmentAmount = 0;

  if (
    [
      electricCurrent,
      motorAdjustmentAmount,
    ].some((value) => Number.isNaN(value))
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

  const propertyReading =
    await prisma.propertyMonthlyReading.findUnique({
      where: {
        propertyId_month: {
          propertyId: tenant.rentalUnit.propertyId,
          month: billMonthStart,
        },
      },
    });

  const motorParticipantCount = await prisma.tenant.count({
    where: {
      isActive: true,
      rentalUnit: {
        propertyId: tenant.rentalUnit.propertyId,
        participatesInMotor: true,
      },
    },
  });
  const motorShareTenantCount = Math.max(
    1,
    motorParticipantCount
  );

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
    propertyReading?.motorPreviousReading ??
    tenant.rentalUnit.property.motorInitialReading;
  const motorCurrent =
    propertyReading?.motorCurrentReading ?? motorPrevious;

  if (electricCurrent < electricPrevious) {
    return {
      ok: false,
      message:
        "Current electric reading cannot be lower than previous electric reading.",
    };
  }

  if (motorAdjustmentAmount !== 0) {
    const [existingMotorAdjustments, generatedMotorBills] =
      await Promise.all([
        prisma.bill.aggregate({
          _sum: {
            motorAdjustmentAmount: true,
          },
          where: {
            month: billMonthStart,
            tenant: {
              rentalUnit: {
                propertyId: tenant.rentalUnit.propertyId,
              },
            },
          },
        }),
        prisma.bill.count({
          where: {
            month: billMonthStart,
            tenant: {
              rentalUnit: {
                propertyId: tenant.rentalUnit.propertyId,
              },
            },
          },
        }),
      ]);
    const projectedAdjustment =
      (existingMotorAdjustments._sum.motorAdjustmentAmount ??
        0) + motorAdjustmentAmount;

    if (
      generatedMotorBills + 1 >= activeTenantsInProperty &&
      Math.abs(projectedAdjustment) > 0.001
    ) {
      return {
        ok: false,
        message:
          "Total motor adjustment for this property and month must equal zero.",
      };
    }
  }

  const rent = tenant.monthlyRent;
  const motorRate =
    tenant.rentalUnit.property.motorChargePerUnit;
  const billCalculation = calculateBill({
    rent,
    electricPrevious,
    electricCurrent,
    electricRate: tenant.electricChargePerUnit,
    electricAdjustmentAmount,
    motorPrevious,
    motorCurrent,
    motorRate,
    motorParticipantCount: motorShareTenantCount,
    participatesInMotor:
      tenant.rentalUnit.participatesInMotor,
    motorAdjustmentAmount,
    otherAdjustmentAmount,
  });
  const adjustmentAmount =
    billCalculation.otherAdjustmentAmount;
  const total = billCalculation.total;
  const paidAmount = 0;
  const dueAmount = total;
  const status = PAYMENT_STATUSES.UNPAID;

  const shareMessage = buildShareMessage({
    tenantName: tenant.name,
    month: billMonthStart,
    rent,
    electricPrevious,
    electricCurrent,
    electricUnits: billCalculation.electricUnits,
    electricChargePerUnit: tenant.electricChargePerUnit,
    electricAmount:
      billCalculation.calculatedElectricAmount,
    electricAdjustmentAmount,
    finalElectricAmount:
      billCalculation.finalElectricAmount,
    motorPrevious,
    motorCurrent,
    motorTotalUnits: billCalculation.motorTotalUnits,
    motorShareUnits: billCalculation.motorShareUnits,
    motorShareTenantCount,
    motorRate,
    motorAmount:
      billCalculation.calculatedMotorAmount,
    motorAdjustmentAmount,
    finalMotorAmount: billCalculation.finalMotorAmount,
    adjustmentAmount,
    total,
    paidAmount,
    dueAmount,
    status,
  });

  await prisma.bill.create({
    data: {
      tenantId,
      propertyReadingId: propertyReading?.id,
      month: billMonthStart,
      rent,
      electricPrevious,
      electricCurrent,
      electricUnits: billCalculation.electricUnits,
      electricChargePerUnit: tenant.electricChargePerUnit,
      electricAmount:
        billCalculation.calculatedElectricAmount,
      calculatedElectricAmount:
        billCalculation.calculatedElectricAmount,
      electricAdjustmentAmount,
      finalElectricAmount:
        billCalculation.finalElectricAmount,
      motorPrevious,
      motorCurrent,
      motorUnits: billCalculation.motorShareUnits,
      motorTotalUnits: billCalculation.motorTotalUnits,
      motorShareUnits: billCalculation.motorShareUnits,
      motorShareTenantCount,
      motorRate,
      motorAmount:
        billCalculation.calculatedMotorAmount,
      calculatedMotorAmount:
        billCalculation.calculatedMotorAmount,
      motorAdjustmentAmount,
      finalMotorAmount: billCalculation.finalMotorAmount,
      adjustmentAmount,
      otherAdjustmentAmount,
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
  const transactionReference =
    formData.get("transactionReference")?.toString().trim() ||
    null;
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
      transactionReference,
      note,
      paidAt,
    },
  });

  await updateBillPaymentSummary(billId);

  revalidateBillingViews();
}

export async function getPayments(filters?: {
  method?: string;
  from?: Date;
  to?: Date;
}) {
  return prisma.payment.findMany({
    where: {
      method:
        filters?.method && filters.method !== "ALL"
          ? filters.method
          : undefined,
      paidAt:
        filters?.from || filters?.to
          ? {
              gte: filters.from,
              lte: filters.to,
            }
          : undefined,
    },
    include: {
      bill: {
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
        },
      },
    },
    orderBy: {
      paidAt: "desc",
    },
  });
}

export async function getPropertyReadingOptions() {
  return prisma.property.findMany({
    where: {
      isArchived: false,
    },
    include: {
      readings: {
        orderBy: {
          month: "desc",
        },
        take: 6,
      },
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function getPropertyReadings() {
  return prisma.propertyMonthlyReading.findMany({
    include: {
      property: true,
      bills: {
        select: {
          electricUnits: true,
          motorAdjustmentAmount: true,
          tenant: {
            select: {
              rentalUnit: {
                select: {
                  participatesInMotor: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: {
      month: "desc",
    },
    take: 12,
  });
}

export async function upsertPropertyMonthlyReading(
  formData: FormData
) {
  const id = formData.get("id")?.toString();
  const propertyId =
    formData.get("propertyId")?.toString() || "";
  const monthValue = formData.get("month")?.toString() || "";
  const monthDate = new Date(monthValue);
  const month = Number.isNaN(monthDate.getTime())
    ? null
    : new Date(
        monthDate.getFullYear(),
        monthDate.getMonth(),
        1
      );
  const governmentPreviousReading = getNumber(
    formData,
    "governmentPreviousReading"
  );
  const governmentCurrentReading = getNumber(
    formData,
    "governmentCurrentReading"
  );
  const motorPreviousReading = getNumber(
    formData,
    "motorPreviousReading"
  );
  const motorCurrentReading = getNumber(
    formData,
    "motorCurrentReading"
  );
  const governmentBillAmount = getNumber(
    formData,
    "governmentBillAmount"
  );
  const governmentOutstanding = getNumber(
    formData,
    "governmentOutstanding"
  );

  if (!propertyId || !month) {
    throw new Error("Property and month are required.");
  }

  const numbers = [
    governmentPreviousReading,
    governmentCurrentReading,
    motorPreviousReading,
    motorCurrentReading,
    governmentBillAmount,
    governmentOutstanding,
  ];

  if (numbers.some((value) => Number.isNaN(value))) {
    throw new Error("Enter valid meter readings and amounts.");
  }

  if (
    governmentCurrentReading < governmentPreviousReading ||
    motorCurrentReading < motorPreviousReading
  ) {
    throw new Error("Current reading cannot be lower than previous reading.");
  }

  if (
    governmentBillAmount < 0 ||
    governmentOutstanding < 0
  ) {
    throw new Error("Government bill and outstanding cannot be negative.");
  }

  const governmentUnits =
    governmentCurrentReading - governmentPreviousReading;
  const motorUnits =
    motorCurrentReading - motorPreviousReading;

  const duplicate =
    await prisma.propertyMonthlyReading.findFirst({
      where: {
        id: id
          ? {
              not: id,
            }
          : undefined,
        propertyId,
        month,
      },
    });

  if (duplicate) {
    throw new Error(
      "This property already has a reading for the selected month."
    );
  }

  if (id) {
    await prisma.propertyMonthlyReading.update({
      where: {
        id,
      },
      data: {
        propertyId,
        month,
        governmentPreviousReading,
        governmentCurrentReading,
        governmentUnits,
        motorPreviousReading,
        motorCurrentReading,
        motorUnits,
        governmentBillAmount,
        governmentOutstanding,
      },
    });
  } else {
    await prisma.propertyMonthlyReading.create({
      data: {
        propertyId,
        month,
        governmentPreviousReading,
        governmentCurrentReading,
        governmentUnits,
        motorPreviousReading,
        motorCurrentReading,
        motorUnits,
        governmentBillAmount,
        governmentOutstanding,
      },
    });
  }

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
