import {
  getProperties,
  getRentalUnits,
} from "@/actions/rentalUnit";
import { connection } from "next/server";

import RentalUnitForm from "@/components/rental-unit/RentalUnitForm";
import RentalUnitTable from "@/components/rental-unit/RentalUnitTable";

export default async function RentalUnitsPage() {
  await connection();

  const properties = await getProperties();
  const rentalUnits = await getRentalUnits();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-950 sm:text-4xl">
          Rental Units
        </h1>

        <p className="mt-1 text-sm font-medium text-slate-500">
          Manage all rentable units.
        </p>
      </div>

      <RentalUnitForm properties={properties} />

      <RentalUnitTable rentalUnits={rentalUnits} />
    </div>
  );
}
