import { join } from 'path'
import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { applyMiddleware } from 'graphql-middleware'
import { permissions } from 'src/permissions'

import * as moduleTypes from 'src/modules'
import * as scalarTypes from 'src/scalars'

import { db } from '@monorepo/db'

const cwd = process.cwd()

const baseSchema = makeSchema({
  types: [moduleTypes, scalarTypes],
  plugins: [
    nexusPrisma({
      prismaClient: (ctx) => (ctx.prisma = db),
      experimentalCRUD: true,
      shouldGenerateArtifacts: false,
    }),
  ],
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  outputs: {
    typegen: join(cwd, 'src/generated/typegen-nexus.d.ts'),
  },
  contextType: {
    module: join(cwd, 'src/context.ts'),
    export: 'Context',
    alias: 'ctx',
  },
  sourceTypes: {
    modules: [
      {
        module: '@monorepo/db',
        alias: 'db',
      },
    ],
  },
  prettierConfig: join(cwd, '../../prettier.config.js'),
})

// export const schema = applyMiddleware(baseSchema, permissions)
export const schema = baseSchema
