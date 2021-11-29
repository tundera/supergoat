/*
  Warnings:

  - Made the column `createdAt` on table `Coach` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Coach` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `ColorScheme` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `ColorScheme` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Image` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Image` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Player` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Player` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Team` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Team` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Coach" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "ColorScheme" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;
