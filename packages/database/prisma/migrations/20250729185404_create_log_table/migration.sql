-- CreateEnum
CREATE TYPE "LogEntity" AS ENUM ('USER', 'USER_PROFILE', 'USER_SETTING', 'COMPANY', 'COMPANY_CONTACT');

-- CreateEnum
CREATE TYPE "LogAction" AS ENUM ('GENERAL', 'LOGIN', 'REGISTER', 'CREATE', 'UPDATE', 'DELETE');

-- CreateTable
CREATE TABLE "logs" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "entity" "LogEntity" NOT NULL,
    "action" "LogAction" NOT NULL DEFAULT 'GENERAL',
    "body" TEXT,
    "ipAddress" TEXT,
    "userId" TEXT,
    "companyId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "logs_userId_idx" ON "logs"("userId");

-- CreateIndex
CREATE INDEX "logs_companyId_idx" ON "logs"("companyId");

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
