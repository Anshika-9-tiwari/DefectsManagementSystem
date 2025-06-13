-- CreateTable
CREATE TABLE "entry" (
    "id" SERIAL NOT NULL,
    "verifiername" TEXT NOT NULL,
    "checkername" TEXT NOT NULL,
    "partnumber" TEXT NOT NULL,
    "defectstatus" TEXT NOT NULL,
    "defect" TEXT NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entry_pkey" PRIMARY KEY ("id")
);
