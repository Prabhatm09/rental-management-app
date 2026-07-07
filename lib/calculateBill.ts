export function calculateBill(
  rent: number,
  electricPrevious: number,
  electricCurrent: number,
  electricRate: number,
  motorPrevious: number,
  motorCurrent: number,
  motorRate: number
) {
  const electricUnits = electricCurrent - electricPrevious;
  const motorUnits = motorCurrent - motorPrevious;

  const electricAmount = electricUnits * electricRate;
  const motorAmount = motorUnits * motorRate;

  const total =
    rent +
    electricAmount +
    motorAmount;

  return {
    electricUnits,
    motorUnits,
    electricAmount,
    motorAmount,
    total,
  };
}