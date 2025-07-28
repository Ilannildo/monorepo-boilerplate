/*
  Warnings:

  - The values [EMPLOYEE] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "UserConfigurationStatus" AS ENUM ('INITIAL', 'GENERAL_DATA', 'EMPLOYEES', 'EXPENSES', 'PAYMENTS', 'COMPLETED');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ADMIN', 'ADMINISTRATOR', 'CONSULTANT', 'SELLER', 'TECHNICIAN', 'ENGINEER', 'FINANCIAL');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'SELLER';
COMMIT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "configurationStatus" "UserConfigurationStatus" DEFAULT 'INITIAL',
ALTER COLUMN "role" SET DEFAULT 'SELLER';
