import execa from 'execa'
import { workspaceRoot } from './workspaces'

export const addModule = async (module: string, workspace: string, options: string[]) => {
  let args = ['workspace', `@monorepo/${workspace}`, 'add', module]

  args = args.concat(options)

  await execa('yarn', args, {
    cwd: workspaceRoot,
    env: {
      FORCE_COLOR: 'true',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

export const updateLockfile = async () => {
  await execa('yarn', [], {
    cwd: workspaceRoot,
    env: {
      FORCE_COLOR: 'true',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}
