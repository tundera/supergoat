#!/usr/bin/env node

import type { FilterTargets } from 'types'

import Listr from 'listr'
import execa from 'execa'

const removeDependencies = async (filter: FilterTargets) => {
  if (filter === 'root') {
    await execa('yarn', ['rimraf', 'node_modules', 'yarn-error.log', 'yarn.lock'])
  } else {
    await execa('yarn', [
      'ultra',
      '-r',
      '--filter',
      `${filter}/*`,
      'rimraf',
      'node_modules',
      'yarn.lock',
      'yarn-error.log',
    ])
  }
}

const resetTasks = new Listr(
  [
    {
      title: 'Removing workspace dependencies',
      task: () =>
        new Listr(
          [
            {
              title: 'Removing package dependencies',
              task: async () => await removeDependencies('packages'),
            },
            {
              title: 'Cleaning example dependencies',
              task: async () => await removeDependencies('examples'),
            },
            {
              title: 'Cleaning service dependencies',
              task: async () => await removeDependencies('services'),
            },
          ],
          { concurrent: true },
        ),
    },
    {
      title: 'Removing root dependencies',
      task: async () => await removeDependencies('root'),
    },
  ],
  { exitOnError: true },
)

const main = async () => {
  await resetTasks.run()
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
