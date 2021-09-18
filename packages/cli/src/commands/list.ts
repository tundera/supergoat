import { Flags } from '@oclif/core'
import execa from 'execa'
import { Command } from '../command'
import { getProjectWorkspaces } from '../utils/workspaces'

export class List extends Command {
  static description = 'Add dependency to project'

  static aliases = ['a']

  static args = [
    {
      name: 'type',
      required: false,
      description: 'type of workspaces to display',
    },
  ]

  static flags = {
    help: Flags.help({ char: 'h' }),
    dev: Flags.boolean({
      char: 'D',
      description: 'Install module as dev dependency',
    }),
    exact: Flags.boolean({
      char: 'E',
      description: 'Install module with exact version',
    }),
    peer: Flags.boolean({
      char: 'P',
      description: 'Install module as peer dependency',
    }),
  }

  listWorkspaces(module: string, workspace: string, options: string[]) {
    return execa('yarn', ['workspace', `@monorepo/${workspace}`, 'add', module].concat(options), {
      cwd: this.project.root,
      env: {
        FORCE_COLOR: 'true',
      },
    }).stdout?.pipe(process.stdout)
  }

  async run() {
    // const { args, flags } = this.parse(List)

    try {
      // const workspaces = getProjectWorkspaces()

      const workspaces = await getProjectWorkspaces()

      console.dir(
        workspaces.map((workspace) => workspace.packageJSON.name),
        { colors: true, depth: null },
      )

      // const child = await this.addModule(args.module, args.workspace)
      // child.on('close', (code: number) => {
      //   const message = code
      //     ? `Failed to add module ${args.module}! ❌`
      //     : `Added module ${args.module} to workspace ${args.workspace}! ✅`
      //   console.log(message)
      //   return process.exit(code)
      // })
      // child.on('SIGINT', (code: number) => {
      //   console.log('Interrupted add script!')
      //   return process.exit(code)
      // })
      // child.on('SIGTERM', (code: number) => {
      //   console.log('Terminated add script!')
      //   return process.exit(code)
      // })
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
