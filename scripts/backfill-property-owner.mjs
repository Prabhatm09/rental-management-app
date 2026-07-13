import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2]?.trim().toLowerCase();

  if (!email) {
    throw new Error(
      "Usage: node scripts/backfill-property-owner.mjs owner@example.com"
    );
  }

  const owner = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
    },
  });

  if (!owner) {
    throw new Error(`No owner account found for ${email}. Sign up first.`);
  }

  const result = await prisma.property.updateMany({
    where: {
      ownerId: null,
    },
    data: {
      ownerId: owner.id,
    },
  });

  const remaining = await prisma.property.count({
    where: {
      ownerId: null,
    },
  });

  console.log(
    `Assigned ${result.count} existing properties to ${owner.email}.`
  );
  console.log(`Unassigned properties remaining: ${remaining}.`);

  if (remaining > 0) {
    process.exitCode = 1;
  }
}

main()
  .catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
