/*
  Warnings:

  - You are about to drop the column `configurationStatus` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `document` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `documentType` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerifiedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `maritalStatus` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `maxCommission` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `minCommission` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profession` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - Added the required column `companyId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CompanyType" AS ENUM ('INTEGRATOR', 'DISTRIBUTOR');

-- CreateEnum
CREATE TYPE "CompanyStatus" AS ENUM ('UNDER_REVIEW', 'DENIED', 'ACCEPTED');

-- DropIndex
DROP INDEX "users_email_idx";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "configurationStatus",
DROP COLUMN "document",
DROP COLUMN "documentType",
DROP COLUMN "emailVerifiedAt",
DROP COLUMN "maritalStatus",
DROP COLUMN "maxCommission",
DROP COLUMN "minCommission",
DROP COLUMN "nationality",
DROP COLUMN "phone",
DROP COLUMN "profession",
DROP COLUMN "username",
ADD COLUMN     "companyId" TEXT NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(200);

-- CreateTable
CREATE TABLE "user_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "document" VARCHAR(14),
    "username" TEXT,
    "documentType" "DocumentType",
    "maritalStatus" "MaritalStatus",
    "phone" VARCHAR(50),
    "profession" TEXT,
    "nationality" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_settings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "configurationStatus" "UserConfigurationStatus" NOT NULL DEFAULT 'INITIAL',
    "locale" TEXT NOT NULL DEFAULT 'pt-BR',
    "timezone" TEXT NOT NULL DEFAULT 'America/Sao_Paulo',
    "emailVerifiedAt" TIMESTAMP(3),
    "minCommission" DOUBLE PRECISION DEFAULT 0,
    "maxCommission" DOUBLE PRECISION DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "type" "CompanyType" NOT NULL,
    "document" TEXT NOT NULL,
    "tradeName" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "loyaltyPoints" INTEGER NOT NULL,
    "primaryColor" TEXT,
    "companyStatus" "CompanyStatus" NOT NULL DEFAULT 'UNDER_REVIEW',
    "secondaryColor" TEXT,
    "stateRegistration" TEXT,
    "responsibleUuid" TEXT,
    "proposalCoverImage" TEXT,
    "acceptedTermsAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_contacts" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "facebook" TEXT,
    "instagram" TEXT,
    "linkedin" TEXT,
    "youtube" TEXT,
    "twitter" TEXT,
    "genericLink" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_userId_key" ON "user_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_settings_userId_key" ON "user_settings"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "document" ON "companies"("document");

-- CreateIndex
CREATE INDEX "companies_document_idx" ON "companies" USING HASH ("document");

-- CreateIndex
CREATE UNIQUE INDEX "company_contacts_companyId_key" ON "company_contacts"("companyId");

-- CreateIndex
CREATE INDEX "company_contacts_companyId_idx" ON "company_contacts" USING HASH ("companyId");

-- CreateIndex
CREATE INDEX "users_status_idx" ON "users"("status");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "users"("role");

-- CreateIndex
CREATE INDEX "users_companyId_idx" ON "users"("companyId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_settings" ADD CONSTRAINT "user_settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_contacts" ADD CONSTRAINT "company_contacts_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
