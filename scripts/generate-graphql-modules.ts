#!/usr/bin/env ts-node

import execa from 'execa'
import ora from 'ora'
import chalk from 'chalk'
import findWorkspaceRoot from 'find-yarn-workspace-root'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-expand')(require('dotenv-flow').config({ silent: true }))

const workspaceRoot = findWorkspaceRoot(process.cwd()) as string

const generateGraphQLModules = async () => {
  await execa('yarn', ['ts-node', 'services/graphql/scripts/generate-graphql-modules'], {
    stdio: 'pipe',
    cwd: workspaceRoot,
  })
}

const main = async () => {
  const spinner = ora({
    text: `Generating graphql types for ${chalk.cyanBright.bold`services/graphql`}`,
    spinner: 'dots',
  }).start()

  try {
    await generateGraphQLModules()

    spinner.succeed(`Sucessfully generated graphql types for ${chalk.cyanBright`services/graphql`}`)
  } catch (err) {
    console.log(err)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
