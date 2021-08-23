/* eslint-disable @typescript-eslint/no-var-requires */
import Listr from 'listr'
import execa from 'execa'
import concurrently from 'concurrently'

require('dotenv-expand')(require('dotenv-flow').config({ silent: true }))

const cwd = process.cwd()

const generatePrismaClient = async () => {
  await execa('yarn', ['prisma', 'generate'])
}

const watchNexusTypes = async () => {
  await execa('yarn', ['watch'], {
    stdio: 'inherit',
  })
}

const preDevTasks = new Listr(
  [
    {
      title: 'Generating Prisma Client',
      task: async () => await generatePrismaClient(),
    },
  ],
  { exitOnError: true },
)

const dev = async () => {
  await watchNexusTypes()
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
