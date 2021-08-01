import type { IncomingMessage, ServerResponse } from 'http'

import db from 'db'

export interface NexusContext {
  db: typeof db
  req: IncomingMessage
  res: ServerResponse
}

export function createContext({ req, res }): NexusContext {
  return { db, req, res }
}
