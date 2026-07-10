export type BillCalculationInput = {
  rent: number;
  electricPrevious: number;
  electricCurrent: number;
  electricRate: number;
  electricAdjustmentAmount?: number;
  motorPrevious: number;
  motorCurrent: number;
  motorRate: number;
  motorParticipantCount: number;
  participatesInMotor: boolean;
  motorAdjustmentAmount?: number;
  otherAdjustmentAmount?: number;
};

export function calculateBill(input: BillCalculationInput) {
  const electricUnits =
    input.electricCurrent - input.electricPrevious;
  const calculatedElectricAmount =
    electricUnits * input.electricRate;
  const electricAdjustmentAmount =
    input.electricAdjustmentAmount ?? 0;
  const finalElectricAmount =
    calculatedElectricAmount + electricAdjustmentAmount;

  const motorTotalUnits =
    input.motorCurrent - input.motorPrevious;
  const motorShareTenantCount = Math.max(
    1,
    input.motorParticipantCount
  );
  const motorShareUnits = input.participatesInMotor
    ? motorTotalUnits / motorShareTenantCount
    : 0;
  const calculatedMotorAmount =
    motorShareUnits * input.motorRate;
  const motorAdjustmentAmount =
    input.motorAdjustmentAmount ?? 0;
  const finalMotorAmount =
    calculatedMotorAmount + motorAdjustmentAmount;
  const otherAdjustmentAmount =
    input.otherAdjustmentAmount ?? 0;

  const total =
    input.rent +
    finalElectricAmount +
    finalMotorAmount +
    otherAdjustmentAmount;

  return {
    electricUnits,
    calculatedElectricAmount,
    electricAdjustmentAmount,
    finalElectricAmount,
    motorTotalUnits,
    motorShareUnits,
    motorShareTenantCount,
    calculatedMotorAmount,
    motorAdjustmentAmount,
    finalMotorAmount,
    otherAdjustmentAmount,
    total,
  };
}
