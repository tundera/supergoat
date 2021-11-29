#!/usr/bin/env node

import 'universal-dotenv/register'

import execa from 'execa'

const startPrismaStudio = async () => {
  await execa('yarn', ['--cwd', 'db', 'prisma', 'studio'])
}

const main = async () => {
  console.log('Starting Prisma Studio ❇️')
  await startPrismaStudio()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
