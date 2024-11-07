// updateEmails.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Set the default email for all existing users without an email
  await prisma.space.updateMany({
    where: { email: null },
    data: { email: 'priyam.chhabra704@gmail.com' },
  });
  console.log("Default email added to existing records.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
