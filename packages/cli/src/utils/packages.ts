import execa from 'execa'
import { workspaceRoot } from './workspaces'

export const watchPackages = () => {
  return execa('yarn', ['ultra', '-r', '--silent', '--filter', 'packages/*', 'watch'], {
    cwd: workspaceRoot,
    env: {
      FORCE_COLOR: 'true',
    },
    stdio: 'ignore',
  })
}
