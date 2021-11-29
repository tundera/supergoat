#!/usr/bin/env node

import type { FilterTargets } from 'types'

import task from 'tasuku'
import execa from 'execa'

const removeBuildFiles = async (filter: FilterTargets) => {
  if (filter === 'root') {
    await execa('yarn', ['rimraf', 'dist', '.ultra.cache.json'])
  } else {
    await execa('yarn', ['ultra', '-r', '--filter', `${filter}/*`, 'clean'])
  }
}

const runTasks = async () => {
  await task('Cleaning:', async ({ task, setTitle }) => {
    await task.group((task) => [
      task('Project workspaces', async ({ task }) => {
        const workspaceTasks = await task.group(
          (task) => [
            task('Remove package build files', async () => await removeBuildFiles('packages')),

            task('Remove example build files', async () => await removeBuildFiles('examples')),

            task('Remove service build files', async () => await removeBuildFiles('services')),
          ],
          { concurrency: Infinity },
        )

        workspaceTasks.clear()
      }),

      task('Project root', async ({ task }) => {
        const rootTasks = await task.group((task) => [
          task('Removing root build files', async () => {
            await removeBuildFiles('root')
          }),
        ])

        rootTasks.clear()
      }),
    ])

    setTitle('Done cleaning')
  })
}

const main = async () => {
  await runTasks()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
