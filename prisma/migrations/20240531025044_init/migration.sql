-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'renter');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rentedBy" INTEGER,

    CONSTRAINT "Tools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rentings" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "toolId" INTEGER NOT NULL,
    "rentedFrom" TIMESTAMP(3) NOT NULL,
    "rentedUntil" TIMESTAMP(3) NOT NULL,
    "isOut" BOOLEAN NOT NULL DEFAULT true,
    "cameBack" TIMESTAMP(3),

    CONSTRAINT "Rentings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tools_id_key" ON "Tools"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Rentings_id_key" ON "Rentings"("id");

-- CreateIndex
CREATE INDEX "Rentings_userId_idx" ON "Rentings"("userId");

-- CreateIndex
CREATE INDEX "Rentings_toolId_idx" ON "Rentings"("toolId");

-- AddForeignKey
ALTER TABLE "Tools" ADD CONSTRAINT "Tools_rentedBy_fkey" FOREIGN KEY ("rentedBy") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rentings" ADD CONSTRAINT "Rentings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rentings" ADD CONSTRAINT "Rentings_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tools"("id") ON DELETE CASCADE ON UPDATE CASCADE;
