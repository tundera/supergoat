#!/usr/bin/env node --loader ts-node/esm

await import('@oclif/command').then(({ run }) =>
  run().then(() =>
    import('@oclif/command/flush.js').catch((err) => import('@oclif/errors/lib/handle.js')),
  ),
)
