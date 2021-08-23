import findWorkspaceRoot from 'find-yarn-workspace-root'
import { join } from 'path'
import { makeSchema } from 'nexus'
import { applyMiddleware } from 'graphql-middleware'
import { nexusPrisma } from 'nexus-plugin-prisma'

import { permissions } from 'src/permissions'

import * as moduleTypes from 'src/modules'

import { db } from '@monorepo/db'

const cwd = process.cwd()
const workspaceRoot = findWorkspaceRoot(cwd) as string

const baseSchema = makeSchema({
  types: [moduleTypes],
  plugins: [nexusPrisma({ prismaClient: (ctx) => (ctx.prisma = db), experimentalCRUD: true })],
  outputs: {
    typegen: join(cwd, 'src/generated/nexus.ts'),
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
  prettierConfig: join(workspaceRoot, 'prettier.config.js'),
})

// export const schema = applyMiddleware(baseSchema, permissions)
export const schema = baseSchema
