import { flags } from '@oclif/command'
import { Command } from '../command'
import { generateFromTemplate } from '../utils/codegen'

export class Generate extends Command {
  static description = 'Generate code from template'
  static aliases = ['g']

  static args = [
    {
      name: 'resource',
      required: true,
      description: 'resource type to generate',
      options: ['component', 'page', 'function', 'model'],
    },
    {
      name: 'name',
      required: false,
      description: 'name of resource to generate',
    },
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    variant: flags.string({
      char: 'v',
      helpLabel: 'Resource variant',
      required: false,
    }),
  }

  async run() {
    const { args, flags } = this.parse(Generate)

    try {
      await generateFromTemplate(args.resource, args.name, flags.variant)
    } catch (err) {
      console.error(err)
      process.exit(1) // clean up?
    }
  }
}
