import 'universal-dotenv/register'

import type { KeystoneContext } from '@keystone-next/keystone/types'

import { insertSeedData } from './helpers'

export const initializeDatabase = async (context: KeystoneContext) => {
  if (process.argv.includes('--seed-data')) {
    await insertSeedData(context)
  }
}
