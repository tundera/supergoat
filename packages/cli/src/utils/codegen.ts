import execa from 'execa'
import { workspaceRoot } from './workspaces'

export const generateFromTemplate = async (resource: string, name?: string, variant?: string) => {
  const target = variant ? `${variant}:new` : 'new'
  const args = ['hygen', resource, target]

  if (name) {
    args.push('--name', name)
  }

  await execa('yarn', args, {
    cwd: workspaceRoot,
    env: {
      FORCE_COLOR: 'true',
    },
    stdio: 'inherit',
  })
}
