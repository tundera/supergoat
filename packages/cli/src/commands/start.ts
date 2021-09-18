import { Flags } from '@oclif/core'
import c from 'chalk'
import ora from 'ora'
import { Command } from '../command'
import { buildPackages, getWorkspaceNames, startWorkspaces, typeCheck } from '../utils/workspaces'

export class Start extends Command {
  static strict = false
  static description = 'Start the production server'

  static aliases = ['s']

  static args = [
    {
      name: 'workspaces',
      required: true,
      description: 'target workspacs to start in monorepo',
      options: getWorkspaceNames(),
    },
  ]

  static flags = {
    help: Flags.help({ char: 'h' }),
    port: Flags.integer({
      char: 'p',
      description: 'Set port number',
    }),
    inspect: Flags.boolean({
      description: 'Enable the Node.js inspector',
    }),
  }

  async run() {
    const { argv } = await this.parse(Start)

    try {
      const spinner = ora({
        text: c.blue`Building packages`,
      }).start()

      await buildPackages()
      spinner.succeed()

      spinner.start(c.blue`Running typecheck`)
      await typeCheck()
      spinner.succeed()

      spinner.stopAndPersist({ text: 'Starting workspaces...', symbol: '🚀' })
      await startWorkspaces(argv, false)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
