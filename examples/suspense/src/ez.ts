import { CreateApp, BuildContextArgs, InferContext } from '@graphql-ez/nextjs'
import { ezGraphiQLIDE } from '@graphql-ez/plugin-graphiql'

import { schema } from 'src/services/graphql/schema'
import { createContext, Context } from 'src/services/graphql/context'

function buildContext({ req, next }: BuildContextArgs) {
  return {
    foo: 'bar',
  }
}

export const ezApp = CreateApp({
  // You can use any valid GraphQL Schema
  schema,
  ez: {
    plugins: [
      ezGraphiQLIDE({
        // Options
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
  cors: false,
})
