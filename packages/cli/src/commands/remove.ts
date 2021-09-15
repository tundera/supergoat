import { flags } from '@oclif/command'
import execa from 'execa'
import { Command } from '../command'

export class Remove extends Command {
  static description = 'Add dependency to project'

  static aliases = ['a']

  static args = [
    {
      name: 'workspace',
      required: true,
      description: 'target workspace to install module',
    },
    {
      name: 'module',
      required: true,
      description: 'module name',
    },
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    root: flags.boolean({
      char: 'W',
      description: 'Remove module from project root',
    }),
  }

  watchPackages() {
    return execa('yarn', ['ultra', '-r', '--silent', '--filter', 'packages/*', 'watch'], {
      cwd: this.project.root,
      env: {
        FORCE_COLOR: 'true',
      },
    }).stdout?.pipe(process.stdout)
  }

  runRemove(module: string, workspace: string) {
    const args = ['workspace', `@monorepo/${workspace}`, 'remove', module]

    return execa('yarn', args, {
      cwd: this.project.root,
      env: {
        FORCE_COLOR: 'true',
      },
    }).stdout?.pipe(process.stdout)
  }

  async run() {
    const { args } = this.parse(Remove)

    try {
      const subprocess = await this.runRemove(args.module, args.workspace)

      subprocess?.on('close', (code: number) => {
        const message = code
          ? `Failed to add module ${args.module}! ❌`
          : `Added module ${args.module} to workspace ${args.workspace}! ✅`
        console.log(message)
        return process.exit(code)
      })

      subprocess?.on('SIGINT', (code: number) => {
        console.log('Interrupted add script!')
        return process.exit(code)
      })
      subprocess?.on('SIGTERM', (code: number) => {
        console.log('Terminated add script!')
        return process.exit(code)
      })
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
