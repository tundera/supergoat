import execa from 'execa'
import { workspaceRoot } from './workspaces'

export const watchPackages = () => {
  return execa('yarn', ['preconstruct', 'watch'], {
    cwd: workspaceRoot,
    env: {
      FORCE_COLOR: 'true',
    },
    stdio: 'ignore',
  })
}
