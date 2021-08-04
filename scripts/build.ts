#!/usr/bin/env ts-node

import execa from 'execa'
import ora from 'ora'
import chalk from 'chalk'
import findWorkspaceRoot from 'find-yarn-workspace-root'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-expand')(require('dotenv-flow').config({ silent: true }))

const workspaceRoot = findWorkspaceRoot(process.cwd()) as string

const buildApps = async () => {
  await execa('yarn', ['ultra', '-r', 'build'], {
    cwd: workspaceRoot,
  })
}

const main = async () => {
  const spinner = ora({
    text: `Building ${chalk.cyanBright.bold`apps`}`,
    spinner: 'dots',
  }).start()

  try {
    await buildApps()

    spinner.succeed(`Sucessfully built ${chalk.cyanBright`apps`}`)
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
