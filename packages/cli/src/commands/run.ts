import { flags } from '@oclif/command'
import c from 'chalk'
import execa from 'execa'
import { join } from 'path'
import { Command } from '../command'
import { workspaceRoot } from '../utils/workspaces'

export class Run extends Command {
  static description = 'Run script in `scripts` directory using ts-node'

  static aliases = ['r']

  static args = [
    {
      name: 'name',
      required: true,
      description: 'Filename of script to run',
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

  runScript(name: string, inspect = false) {
    console.log('INSPECT:', inspect)
    console.log(c`Running script at {blueBright "scripts/src/${name}" }`)
    return execa('node', ['--loader', 'ts-node/esm', `src/${name}.ts`], {
      cwd: join(workspaceRoot, 'scripts'),
      env: {
        FORCE_COLOR: 'true',
        NODE_OPTIONS: inspect ? '--inspect' : '',
      },
    }).stdout?.pipe(process.stdout)
  }

  async run() {
    const { args, flags } = this.parse(Run)

    try {
      await this.runScript(args.name, flags.inspect)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
