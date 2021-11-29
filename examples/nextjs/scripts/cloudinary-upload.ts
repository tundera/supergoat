#!/usr/bin/env node

import 'universal-dotenv/register'

import { join } from 'path'
// import { v2 as cloudinary } from 'cloudinary'
import db from 'db'

async function main() {
  const players = await db.player.findMany()

  for (const player of players) {
    const fullPath = join('db/backups/images/players', `${player.id}.png`)

    console.log(fullPath)

    try {
      // await cloudinary.uploader.upload(
      //   fullPath,
      //   {
      //     public_id: 'nba/players/headshots',
      //     overwrite: true,
      //   },
      //   function (error, result) {
      //     console.log(result, error)
      //   },
      // )
    } catch (err) {
      console.log(err)
    }
  }
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => {
    console.log('Successful ✅')
    process.exit(0)
  })
