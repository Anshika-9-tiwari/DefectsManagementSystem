/*
  Warnings:

  - The `defect` column on the `entry` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Part" ADD COLUMN     "inspectionModule" TEXT NOT NULL DEFAULT 'n/a',
ADD COLUMN     "itemCode" TEXT NOT NULL DEFAULT 'n/a';

-- AlterTable
ALTER TABLE "entry" DROP COLUMN "defect",
ADD COLUMN     "defect" TEXT[];
