#!/usr/bin/env node

import 'universal-dotenv/register'

import Listr from 'listr'
import execa from 'execa'
import concurrently from 'concurrently'

const cwd = process.cwd()

const generateThemeTypes = async () => {
  await execa('yarn', ['chakra-cli', 'tokens', '@supergoat/theme'])
}

const generatePrismaClient = async () => {
  await execa('yarn', ['prisma', 'generate'])
}

const preDevTasks = new Listr(
  [
    {
      title: 'Generating Chakra theme types',
      task: async () => await generateThemeTypes(),
    },
    {
      title: 'Generating Prisma Client',
      task: async () => await generatePrismaClient(),
    },
  ],
  { exitOnError: true },
)

const dev = async () => {
  await concurrently(
    [
      { command: 'yarn debug:next', name: 'NEXT', prefixColor: 'green' },
      {
        command: 'yarn watch:nexus',
        name: 'NEXUS',
        prefixColor: 'magenta',
      },
      {
        command: 'yarn watch:codegen',
        name: 'CODEGEN',
        prefixColor: 'cyan',
      },
      {
        command: 'stripe listen --forward-to localhost:3000/api/stripe/webhook',
        name: 'STRIPE',
        prefixColor: 'blue',
      },
    ],
    { prefix: 'name', killOthers: ['failure', 'success'], restartTries: 3, cwd },
  )
}

const main = async () => {
  console.log('Starting development processes...')
  await preDevTasks.run()
  await dev()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
