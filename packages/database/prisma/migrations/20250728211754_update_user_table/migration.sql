/*
  Warnings:

  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `email_verified_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.
  - The `status` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'SEPARATED', 'DIVORCED', 'WIDOWED');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('CNPJ', 'CPF');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('CREATED', 'INVITED', 'ACTIVE', 'BLOCKED');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
DROP COLUMN "email_verified_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "document" VARCHAR(14),
ADD COLUMN     "documentType" "DocumentType",
ADD COLUMN     "emailVerifiedAt" TIMESTAMP(3),
ADD COLUMN     "maritalStatus" "MaritalStatus",
ADD COLUMN     "maxCommission" DOUBLE PRECISION DEFAULT 5,
ADD COLUMN     "minCommission" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "nationality" TEXT,
ADD COLUMN     "profession" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "username" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'CREATED';
