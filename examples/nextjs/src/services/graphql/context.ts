import type { IncomingMessage, ServerResponse } from 'http'
import type { PrismaClient } from '@prisma/client'

import db from 'db'

export interface Context {
  req: IncomingMessage
  res: ServerResponse
  db: PrismaClient
  prisma: PrismaClient
  select?: any
  include?: any
}

export function createContext(ctx: any): Context {
  return { ...ctx, db, prisma: db }
}
