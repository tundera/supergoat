import express from 'express'

import { buildApp } from './app'

const app = express()

buildApp({
  app,
  async prepare() {
    await import('src/generated/types')
  },
}).then((mod) => {
  app.use(mod.router)

  const port = process.env.PORT ?? 3000
  app.listen(port, () => {
    console.log(`Express listening on port ${port}`)
  })
})