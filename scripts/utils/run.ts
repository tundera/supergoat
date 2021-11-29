#!/usr/bin/env node

import 'universal-dotenv/register'

import execa from 'execa'

import { Command } from 'commander'

const program = new Command()

export const run = async () => {
  // Define program options
  program.option('-f, --file <type>', 'filename of the script to execute')

  // Parse program options
  program.parse(process.argv)

  // Grab file and print runner message
  const { file } = program.opts()
  console.log(`Running script "${file}"`)

  await execa.node(file, {
    stdio: 'inherit',
  })
}

run()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
