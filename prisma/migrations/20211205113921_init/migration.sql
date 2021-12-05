-- CreateTable
CREATE TABLE "EulerProblem" (
    "id" SERIAL NOT NULL,
    "function" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "EulerProblem_pkey" PRIMARY KEY ("id")
);
