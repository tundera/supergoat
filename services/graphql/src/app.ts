import {
  BuildContextArgs,
  CreateApp,
  gql,
  InferContext,
  readStreamToBuffer,
} from '@graphql-ez/express'
import { ezAltairIDE } from '@graphql-ez/plugin-altair'
import { ezCodegen } from '@graphql-ez/plugin-codegen'
import { ezGraphiQLIDE } from '@graphql-ez/plugin-graphiql'
import { ezGraphQLModules } from '@graphql-ez/plugin-modules'
import { ezScalars } from '@graphql-ez/plugin-scalars'
import { ezSchema } from '@graphql-ez/plugin-schema'
import { ezUpload } from '@graphql-ez/plugin-upload'
import { ezWebSockets } from '@graphql-ez/plugin-websockets'

import { schema } from 'src/schema'

function buildContext({ req }: BuildContextArgs) {
  return {
    req,
    foo: 'bar',
  }
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export const { registerModule, buildApp } = CreateApp({
  buildContext,
  ez: {
    plugins: [
      ezCodegen({
        config: {
          federation: true,
          deepPartialResolvers: true,
          targetPath: './src/generated/ez-codegen.ts',
          scalars: {
            DateTime: 'string',
          },
        },
        outputSchema: './schema.graphql',
      }),
      ezUpload(),
      ezGraphQLModules(),
      ezScalars({
        DateTime: 1,
      }),
      ezAltairIDE(),
      ezGraphiQLIDE(),
      ezWebSockets('adaptive'),
      ezSchema({
        schema: schema,
      }),
    ],
  },
})

export { gql }
