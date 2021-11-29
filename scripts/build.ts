#!/usr/bin/env node -r universal-dotenv/register -r tsm

import type { FilterTargets } from 'types'

import task from 'tasuku'
import execa from 'execa'

const buildWorkspaces = async (filter?: FilterTargets) => {
  if (filter) {
    if (filter === 'root') {
      await execa('yarn', ['rimraf', 'dist'])
    } else {
      await execa('yarn', ['ultra', '-r', '--filter', `${filter}/*`, 'build'])
    }
  } else {
    await execa('yarn', ['ultra', '-r', 'build'])
  }
}

const runTasks = async () => {
  await task('Building project workspaces', async () => {
    await buildWorkspaces()
  })
}

const main = async () => {
  await runTasks()
  console.log('✅ Done')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
