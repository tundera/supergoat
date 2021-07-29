import { join } from 'path'
import { makeSchema } from 'nexus'
import { applyMiddleware } from 'graphql-middleware'

import { permissions } from 'services/graphql/permissions'

import * as inputTypes from 'services/graphql/inputs'
import * as moduleTypes from 'services/graphql/modules'
import * as scalarTypes from 'services/graphql/scalars'

const cwd = process.cwd()

const baseSchema = makeSchema({
  types: [moduleTypes, scalarTypes, inputTypes],
  outputs: {
    schema: join(cwd, 'services/graphql/generated/schema.graphql'),
    typegen: join(cwd, 'services/graphql/generated/nexus.ts'),
  },
  contextType: {
    module: join(cwd, 'services/graphql/context.ts'),
    export: 'NexusContext',
    alias: 'ctx',
  },
  sourceTypes: {
    modules: [
      {
        module: join(cwd, 'db/index.ts'),
        alias: 'db',
      },
    ],
  },
  prettierConfig: join(cwd, 'prettier.config.js'),
})

export const schema = applyMiddleware(baseSchema, permissions)
