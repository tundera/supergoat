import { PrismaClient } from '@prisma/client'

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  db: PrismaClient
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal

const db = global.db || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.db = db

export async function disconnect() {
  await db.$disconnect()

  return true
}

export async function connect() {
  await db.$connect()

  return true
}

export default db

export * from '@prisma/client'
