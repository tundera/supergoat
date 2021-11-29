import { config } from '@keystone-next/keystone'
import { statelessSessions } from '@keystone-next/keystone/session'

import { lists } from './schema'
import { PORT, DATABASE_URL, SESSION_MAX_AGE, SESSION_SECRET } from './config'
import { withAuth } from './auth'
import { initializeDatabase } from './seed-data'

const session = statelessSessions({
  maxAge: SESSION_MAX_AGE,
  secret: SESSION_SECRET as string,
})

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      useMigrations: true,
      url: DATABASE_URL,
      idField: {
        kind: 'cuid',
      },
      async onConnect(context) {
        await initializeDatabase(context)
      },
    },
    ui: {
      isAccessAllowed: (context) =>
        process.env.NODE_ENV === 'development' ? true : !!context.session?.data,
    },
    lists,
    session,
    server: { port: PORT },
    experimental: {
      generateNodeAPI: true,
      enableNextJsGraphqlApiEndpoint: true,
      generateNextGraphqlAPI: true,
    },
  }),
)
