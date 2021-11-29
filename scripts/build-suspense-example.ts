#!/usr/bin/env ts-node

import 'universal-dotenv/register'

import execa from 'execa'
import ora from 'ora'
import chalk from 'chalk'
import findWorkspaceRoot from 'find-yarn-workspace-root'

const workspaceRoot = findWorkspaceRoot(process.cwd()) as string

const buildExamples = async () => {
  await execa('yarn', ['ultra', '-r', '--filter', '*-example', 'build'], {
    stdio: 'pipe',
    cwd: workspaceRoot,
  })
}

const buildNextjsExample = async () => {
  await execa('yarn', ['workspace', 'nextjs-example', 'build'])
}

const main = async () => {
  const spinner = ora({
    text: `Building ${chalk.cyanBright.bold`nextjs-example`}`,
    spinner: 'dots',
  }).start()

  try {
    await buildExamples()
    await buildNextjsExample()

    spinner.succeed(`Sucessfully built ${chalk.cyanBright`nextjs-example`}`)
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
