import {
  getProperties,
  getRentalUnits,
} from "@/actions/rentalUnit";
import { connection } from "next/server";

import RentalUnitSection from "@/components/rental-unit/RentalUnitSection";

export default async function RentalUnitsPage() {
  await connection();

  const properties = await getProperties();
  const rentalUnits = await getRentalUnits();

  return (
    <RentalUnitSection
      properties={properties}
      rentalUnits={rentalUnits}
    />
  );
}
