import { join } from 'path'
import { makeSchema } from 'nexus'
import { applyMiddleware } from 'graphql-middleware'
import { paljs } from '@paljs/nexus'
import { permissions } from 'src/services/graphql/permissions'

// import * as inputTypes from 'src/services/graphql/inputs'
// import * as moduleTypes from 'src/services/graphql/modules'
// import * as scalarTypes from 'src/services/graphql/scalars'
import * as types from 'src/services/graphql/generated/resolvers'

const cwd = process.cwd()

const baseSchema = makeSchema({
  // types: [moduleTypes, scalarTypes, inputTypes],
  types,
  plugins: [paljs()],
  outputs: {
    schema: join(cwd, 'src/services/graphql/generated/schema.graphql'),
    typegen: join(cwd, 'src/services/graphql/generated/nexus.ts'),
  },
  contextType: {
    module: join(cwd, 'src/services/graphql/context.ts'),
    export: 'Context',
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
