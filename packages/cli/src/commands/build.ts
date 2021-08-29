import { flags } from '@oclif/command'
import { Command } from '../command'
import { buildAllWorkspaces, getWorkspaceNames } from '../utils/workspaces'

export class Build extends Command {
  static description = 'Creates a production build'
  static aliases = ['b']

  static args = [
    {
      name: 'workspace',
      required: false,
      description: 'target workspace to build',
      options: getWorkspaceNames(),
    },
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async run() {
    const { args } = this.parse(Build)

    try {
      if (args.workspace) {
        console.log('need to add a build command for single workspace')
        // await buildWorkspace(args.workspace)
      } else {
        await buildAllWorkspaces()
      }
    } catch (err) {
      console.error(err)
      process.exit(1) // clean up?
    }
  }
}
