import findWorkspaceRoot from 'find-yarn-workspace-root'
import { join } from 'path'
import { makeSchema } from 'nexus'
import { applyMiddleware } from 'graphql-middleware'
import { paljs } from '@paljs/nexus'

import { permissions } from 'src/permissions'

// import * as scalarTypes from 'src/scalars'
import * as moduleTypes from 'src/modules'
import * as generatedTypes from 'src/generated/types'

const cwd = process.cwd()
const workspaceRoot = findWorkspaceRoot(cwd) as string

const baseSchema = makeSchema({
  types: [generatedTypes, moduleTypes],
  plugins: [paljs()],
  outputs: {
    schema: join(cwd, 'src/generated/schema.graphql'),
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

export const schema = applyMiddleware(baseSchema, permissions)
