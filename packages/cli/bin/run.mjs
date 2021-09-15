#!/usr/bin/env node

import { run } from '@monorepo/cli'

run()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
