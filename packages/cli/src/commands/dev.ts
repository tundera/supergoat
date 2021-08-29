import { flags } from '@oclif/command'
import ora from 'ora'
import { Command } from '../command'
import { watchPackages } from '../utils/packages'
import { devPackages, getWorkspaceNames } from '../utils/workspaces'
import { startWorkspaces } from '../utils/workspaces'

export class Dev extends Command {
  static strict = false
  static description = 'Start the production server'

  static aliases = ['d']

  static args = [
    {
      name: 'workspace',
      required: true,
      description: 'target workspace in monorepo',
      options: getWorkspaceNames(),
    },
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    port: flags.integer({
      char: 'p',
      description: 'Set port number',
    }),
    inspect: flags.boolean({
      description: 'Enable the Node.js inspector',
    }),
  }

  async run() {
    const { argv } = this.parse(Dev)

    try {
      const spinner = ora().start('Preparing packages for development')

      await devPackages()

      spinner.stopAndPersist({
        symbol: '✅',
      })

      await startWorkspaces(argv, true)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
