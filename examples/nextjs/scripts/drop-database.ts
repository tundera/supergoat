#!/usr/bin/env node

import { Client } from 'pg'

const connectionString = process.env.DATABASE_URL as string

const { username: user, hostname: host, port, pathname: path } = new URL(connectionString)
const db = new Client({ user: user as string, host: host as string, port: Number(port) })
const dbName = path?.slice(1).substring(0, path.slice(1).lastIndexOf('?'))

async function drop() {
  await db.connect()
  console.log(`dropping the ${dbName} database`)

  try {
    await db.query(`DROP DATABASE "${dbName}"`)
  } catch (error) {
    console.log({ error })
  }

  await db.end()
}

drop()
