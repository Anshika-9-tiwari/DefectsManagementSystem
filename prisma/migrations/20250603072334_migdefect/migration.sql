-- CreateTable
CREATE TABLE "Defects" (
    "id" SERIAL NOT NULL,
    "defectcode" TEXT NOT NULL,
    "defect" TEXT NOT NULL,

    CONSTRAINT "Defects_pkey" PRIMARY KEY ("id")
);
