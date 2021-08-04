import type { IncomingMessage, ServerResponse } from 'http'
import type { ExecutionContext } from 'graphql-helix'
import type { PrismaClient } from '@monorepo/db'

import db from '@monorepo/db'

export interface Context {
  req: IncomingMessage
  res: ServerResponse
  db: PrismaClient
  select?: any
  include?: any
}

export function createContext(ctx: any): Context {
  return { ...ctx, db }
}
