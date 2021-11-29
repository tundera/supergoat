/* eslint-disable @typescript-eslint/no-var-requires */
import { REGISTER_INSTANCE } from 'ts-node'

import { join } from 'path'
import { workspaceRoot } from '@/utils/workspaces'

export const setupTsnode = async () => {
  if (!process[REGISTER_INSTANCE]) {
    // During cli interal dev, oclif automaticaly sets up ts-node so we have to check
    await import('ts-node').then((mod) => mod.register())
  }

  await import('tsconfig-paths').then((mod) =>
    mod.register({
      baseUrl: join(workspaceRoot, 'packages/cli'),
      paths: {
        '@/*': ['src/*'],
      },
    }),
  )
}
