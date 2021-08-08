#!/usr/bin/env ts-node

import execa from 'execa'
import ora from 'ora'
import chalk from 'chalk'
import findWorkspaceRoot from 'find-yarn-workspace-root'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-expand')(require('dotenv-flow').config({ silent: true }))

const workspaceRoot = findWorkspaceRoot(process.cwd()) as string

const buildExamples = async () => {
  await execa('yarn', ['ultra', '-r', '--filter', '*-example', 'build'], {
    stdio: 'pipe',
    cwd: workspaceRoot,
  })
}

const buildSuspenseExample = async () => {
  await execa('yarn', ['workspace', 'suspense-example', 'build'])
}

const main = async () => {
  const spinner = ora({
    text: `Building ${chalk.cyanBright.bold`suspense-example`}`,
    spinner: 'dots',
  }).start()

  try {
    await buildExamples()
    await buildSuspenseExample()

    spinner.succeed(`Sucessfully built ${chalk.cyanBright`suspense-example`}`)
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
