const EulerProblems = require("./EulerProblems");

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  for (let EulerProblem of EulerProblems) {
    await prisma.eulerproblem.create({
      data: EulerProblem
    });
  }
}

main().catch(e => {
  console.log(e);
  process.exit(1);
  }).finally(() => {
  prisma.$disconnect();
});



export {}