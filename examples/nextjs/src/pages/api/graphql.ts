import type { NextApiHandler } from 'next'

import { CreateApp, BuildContextArgs } from '@graphql-ez/nextjs'
import { ezScalars } from '@graphql-ez/plugin-scalars'
import { ezSchema } from '@graphql-ez/plugin-schema'
import { ezGraphiQLIDE } from '@graphql-ez/plugin-graphiql'
import { $settings } from 'nexus-prisma'

import db from 'db'
import { schema } from 'src/services/graphql/schema'
import { AllTeamsQuery } from 'src/lib/graphql/operations'

function buildContext({ req, next }: BuildContextArgs) {
  // IncomingMessage
  req

  // NextApiRequest | undefined
  next?.req

  return {
    db,
  }
}

const { buildApp } = CreateApp({
  ez: {
    plugins: [
      ezGraphiQLIDE({
        defaultQuery: AllTeamsQuery,
      }),
      ezScalars({
        DateTime: 1,
      }),
      ezSchema({
        schema,
      }),
    ],
  },
  envelop: {
    plugins: [
      // Envelop Plugins
    ],
  },
  buildContext,
  // Other Options
  cors: true,
})

export default buildApp().apiHandler as NextApiHandler

$settings({
  prismaClientContextField: 'db',
})
