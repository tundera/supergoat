import { join } from 'path'
import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
// import { applyMiddleware } from 'graphql-middleware'
// import { permissions } from 'src/services/graphql/permissions'

import * as inputTypes from 'src/services/graphql/inputs'
import * as moduleTypes from 'src/services/graphql/modules'
import * as scalarTypes from 'src/services/graphql/scalars'

import db from 'db'

const cwd = process.cwd()

const baseSchema = makeSchema({
  types: [inputTypes, moduleTypes, scalarTypes],
  plugins: [
    nexusPrisma({
      prismaClient: (ctx) => (ctx.prisma = db),
      experimentalCRUD: true,
      shouldGenerateArtifacts: false,
    }),
  ],
  outputs: {
    schema: join(cwd, 'schema.gql'),
    typegen: join(cwd, 'src/services/graphql/generated/typegen-nexus.d.ts'),
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

// export const schema = applyMiddleware(baseSchema, permissions)
export const schema = baseSchema
