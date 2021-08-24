/* eslint-disable @typescript-eslint/no-var-requires */
import Listr from 'listr'
import execa from 'execa'

require('dotenv-expand')(require('dotenv-flow').config({ silent: true }))

const build = async () => {
  const generatePrismaClient = async () => {
    await execa('yarn', ['prisma', 'generate'])
  }

  const generateNexusTypes = async () => {
    await execa('yarn', ['ts-node', 'src/services/graphql/schema'])
  }

  // const pushGraphQLSchema = async () => {
  //   await execa('yarn', ['graphcdn', 'push', 'schema'])
  // }

  const generateThemeTypes = async () => {
    await execa('yarn', ['chakra-cli', 'tokens', 'src/styles/theme'])
  }

  const runGraphQLCodegen = async () => {
    await execa('yarn', ['graphql-codegen'])
  }

  const deployPrismaMigrations = async () => {
    await execa('yarn', ['prisma', 'migrate', 'deploy'])
  }

  const buildApp = async () => {
    await execa('yarn', ['next', 'build'])
  }

  const preBuildTasks = new Listr(
    [
      {
        title: 'Generating Chakra theme types',
        task: async () => await generateThemeTypes(),
      },
      {
        title: 'Generating Prisma Client',
        task: async () => await generatePrismaClient(),
      },
      {
        title: 'Generating Nexus Types',
        task: async () => await generateNexusTypes(),
      },
      // {
      //   title: 'Pushing generated schema to GraphCDN',
      //   task: async () => await pushGraphQLSchema(),
      // },
      {
        title: 'Running GraphQL Codegen',
        task: async () => await runGraphQLCodegen(),
      },
    ],
    { exitOnError: true },
  )

  const postBuildTasks = new Listr([
    {
      title: 'Deploying Prisma schema migrations',
      task: async () => await deployPrismaMigrations(),
    },
  ])

  const buildTasks = new Listr(
    [
      {
        title: 'Running pre-build tasks',
        task: () => preBuildTasks,
      },
      {
        title: 'Creating a production build',
        task: async () => await buildApp(),
      },
      {
        title: 'Running post-build tasks',
        task: () => postBuildTasks,
      },
    ],
    { exitOnError: true },
  )

  await buildTasks.run()

  console.log('Build complete ✅')
}

const main = async () => {
  console.log('Starting new production build 🚀')
  await build()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
