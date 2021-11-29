#!/usr/bin/env node

import 'universal-dotenv/register'

import execa from 'execa'
import task from 'tasuku'

const generatePrismaClient = async () => {
  await execa('yarn', ['prisma', 'generate'])
}

const generateNexusTypes = async () => {
  await execa('yarn', ['ts-node', 'src/services/graphql/schema'])
}

const pushGraphQLSchema = async () => {
  await execa('yarn', ['graphcdn', 'push'])
}

const generateThemeTypes = async () => {
  await execa('yarn', ['chakra-cli', 'tokens', '@supergoat/theme'])
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

const build = async () => {
  await task('Running build tasks', async ({ task, setTitle }) => {
    const tasks = await task.group((task) => [
      task('Generating Chakra theme types', async () => await generateThemeTypes()),

      task('Emit GraphQL types and generate data hooks', async ({ task }) => {
        const prebuildTasks = await task.group((task) => [
          task('Generating Prisma Client', async () => await generatePrismaClient()),
          task('Generating Nexus Types', async () => await generateNexusTypes()),
          task('Running GraphQL Codegen', async () => await runGraphQLCodegen()),
        ])

        prebuildTasks.clear()
      }),

      task('Deploy updated GraphQL schema to GraphCDN', async () => await pushGraphQLSchema()),

      task('Build application for production', async () => await buildApp()),

      task('Apply Prisma migrations to database', async () => await deployPrismaMigrations()),
    ])

    tasks.clear()

    setTitle('Build succeeded')
  })
}

const main = async () => {
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
