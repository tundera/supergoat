#!/usr/bin/env node

import task from 'tasuku'

export const timeout = async (ms: number) => {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

const runTasks = async () => {
  await task('Task #1', async ({ task }) => {
    const nestedTask = await task('Task 1a', async ({ task }) => {
      await timeout(3000)

      await task('Doing something', async () => {
        await timeout(3000)
      })

      await task('Doing something else', async () => {
        await timeout(3000)
      })
    })

    nestedTask.clear()

    // await task('Task 2', async ({ task }) => {
    //   await timeout(3000)

    //   await task(
    //     'Level 3 task',
    //     async ({ task }) =>
    //       await task.group(
    //         (task) => [
    //           task('Task 3a', async () => await timeout(3000)),

    //           task('Task 3b', async () => await timeout(3000)),
    //         ],
    //         {
    //           concurrency: 2, // Number of tasks to run at a time
    //         },
    //       ),
    //   )
    // })
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
