/*
  Warnings:

  - You are about to drop the `register` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "register";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Register" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "marca_moto" TEXT NOT NULL,
    "BI" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT NOT NULL
);
