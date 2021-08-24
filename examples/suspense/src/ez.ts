import { CreateApp, BuildContextArgs, InferContext, EZContext } from '@graphql-ez/nextjs'
import { ezCodegen } from '@graphql-ez/plugin-codegen'
import { ezAltairIDE } from '@graphql-ez/plugin-altair'
import { ezScalars } from '@graphql-ez/plugin-scalars'
import { ezSchema } from '@graphql-ez/plugin-schema'

import { schema } from 'src/services/graphql/schema'
import { createContext, Context } from 'src/services/graphql/context'

function buildContext({ req, next }: BuildContextArgs) {
  return {
    req,
    foo: 'bar',
  }
}

export const ezApp = CreateApp({
  // You can use any valid GraphQL Schema
  schema,
  ez: {
    plugins: [
      ezCodegen({
        config: {
          federation: true,
          deepPartialResolvers: true,
          targetPath: './src/ez.generated.ts',
          scalars: {
            DateTime: 'string',
          },
        },
        outputSchema: './schema.graphql',
      }),
      ezScalars({
        DateTime: 1,
      }),
      ezAltairIDE(),
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
