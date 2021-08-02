/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

// add prisma to the NodeJS global type
// Prevent multiple instances of Prisma Client in development
declare global {
  var db: PrismaClient;
}

const db = global.db || new PrismaClient();

if (process.env.NODE_ENV === "development") global.db = db;

export async function disconnect(): Promise<boolean> {
  await db.$disconnect();

  return true;
}

export async function connect(): Promise<boolean> {
  await db.$connect();

  return true;
}

export default db;

export * from "@prisma/client";
