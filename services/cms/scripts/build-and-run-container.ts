#!/usr/bin/env node -r universal-dotenv/register -r tsm

import ora from 'ora'
import chalk from 'chalk'
import execa from 'execa'

const buildContainer = async () => {
  const spinner = ora({
    text: `Building container "${chalk.cyanBright.bold`supergoat-cms`}"`,
    spinner: 'dots',
  }).start()

  try {
    await execa('docker', ['build', '.', '-t', 'supergoat-cms'], {
      shell: true,
    })

    spinner.succeed(`Sucessfully built container "${chalk.cyanBright`supergoat-cms`}"`)
  } catch (err) {
    spinner.fail(`Failed to build container "${chalk.cyanBright`supergoat-cms`}"`)
    console.log(err)
  }
}

// docker run -p 3000:3000 my-next-js-app
const runContainer = async () => {
  const spinner = ora({
    text: `Starting container "${chalk.cyanBright.bold`supergoat-cms`}"`,
    spinner: 'dots',
  }).start()

  try {
    await execa('docker', ['run', '-p', '3000:3000', 'supergoat-cms'], {
      shell: true,
    })

    spinner.succeed(`Sucessfully started container "${chalk.cyanBright`supergoat-cms`}"`)
  } catch (err) {
    spinner.fail(`Failed to start container "${chalk.cyanBright`supergoat-cms`}"`)
    console.log(err)
  }
}

const main = async () => {
  await buildContainer()
  await runContainer()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
