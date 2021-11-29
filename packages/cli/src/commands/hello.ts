import { Flags } from '@oclif/core'
import { Command } from '../command'

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ monorepo hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: Flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = await this.parse(Hello)

    const name = flags.name ?? 'world'

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    await Promise.resolve(() => this.log(`hello ${name} from ./src/commands/hello.ts`))
  }
}
