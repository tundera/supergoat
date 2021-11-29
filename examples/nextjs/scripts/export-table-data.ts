#!/usr/bin/env node

import 'universal-dotenv/register'

import prettier from 'prettier'

import { pluralize } from 'inflection'
import { writeToBuffer } from 'fast-csv'
import { paramCase } from 'change-case'
import { promises as fs } from 'fs'
import { join } from 'path'
import { Pool, QueryResultRow } from 'pg'

const cwd = process.cwd()

const tables = ['Team', 'Coach', 'Player', 'ColorScheme', 'Image']

const pool = new Pool({
  host: process.env.PGHOST as string,
  user: process.env.PGUSER as string,
  database: process.env.PGDATABASE as string,
  port: Number(process.env.PGPORT),
  password: process.env.PGPASSWORD as string,
})

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

const exportAsCsv = async (data: QueryResultRow[], filePath: string) => {
  const csvData = await writeToBuffer(data, { headers: true })
  await fs.writeFile(filePath, csvData, 'utf8')
}

const exportAsJson = async (data: QueryResultRow[], filePath: string) => {
  const prettierConfig = await prettier.resolveConfig(join(process.cwd(), 'prettier.config'))

  const formatted = prettier.format(JSON.stringify(data), {
    ...prettierConfig,
    parser: 'json',
  })

  const jsonData = Buffer.from(formatted, 'utf8')
  await fs.writeFile(filePath, jsonData, 'utf8')
}

const exportTableData = async (name: string) => {
  const client = await pool.connect()

  try {
    const { rows } = await client.query(`SELECT * FROM "${name}"`)

    await exportAsCsv(rows, join(cwd, 'db/backups/csv', `${paramCase(pluralize(name))}.csv`))
    await exportAsJson(
      rows,
      join(cwd, 'db/backups/documents', `${paramCase(pluralize(name))}.json`),
    )
  } finally {
    client.release()
  }
}

const main = async () => {
  for (const table of tables) {
    try {
      await exportTableData(table)
      console.log(`Done exporting table "${table}"`)
    } catch (err) {
      console.log(err.stack)
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await pool.end()
    process.exit(0)
  })
