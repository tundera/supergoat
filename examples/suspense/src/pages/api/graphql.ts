import { inspectWriteGenerate } from '@gqty/cli'
import { CreateApp, BuildContextArgs, InferContext, EZContext } from '@graphql-ez/nextjs'
import { ezCodegen } from '@graphql-ez/plugin-codegen'
import { ezScalars } from '@graphql-ez/plugin-scalars'
import { ezSchema } from '@graphql-ez/plugin-schema'
import { ezGraphiQLIDE } from '@graphql-ez/plugin-graphiql'
import { ezAltairIDE } from '@graphql-ez/plugin-altair'

import { schema } from 'src/services/graphql/schema'
import { createContext, Context } from 'src/services/graphql/context'
import { AllTeamsQuery } from 'src/lib/graphql/operations'

function buildContext({ req, next }: BuildContextArgs) {
  // IncomingMessage
  req

  // NextApiRequest | undefined
  next?.req

  return {
    // foo: 'bar',
  }
}

const { buildApp } = CreateApp({
  schema,
  ez: {
    plugins: [
      ezCodegen({
        config: {
          scalars: {
            DateTime: 'string',
          },
        },
        outputSchema: true,
      }),
      ezGraphiQLIDE({
        defaultQuery: AllTeamsQuery,
      }),
      ezAltairIDE(),
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

export default buildApp().apiHandler

inspectWriteGenerate({
  endpoint: process.env.NEXT_PUBLIC_GRAPHQL_API,
}).catch(console.error)
