import { Flags } from '@oclif/core'
import c from 'chalk'
import ora from 'ora'
import { Command } from '../command'
import { addModule, updateLockfile } from '../utils/dependencies'

export class Add extends Command {
  static strict = false
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

  async run() {
    const { args, flags } = await this.parse(Add)

    const options = []

    if (flags.dev) options.push('--dev')
    if (flags.exact) options.push('--exact')
    if (flags.peer) options.push('--peer')

    try {
      const spinner = ora({
        text: c.blue`Adding ${c.cyanBright(args.module)} to workspace ${c.cyanBright(
          `@monorepo/${args.workspace}`,
        )}`,
      }).start()

      await addModule(args.module, args.workspace, options)
      spinner.succeed()

      spinner.start(c.blue`Updating lockfile`)
      await updateLockfile()
      spinner.succeed()
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
