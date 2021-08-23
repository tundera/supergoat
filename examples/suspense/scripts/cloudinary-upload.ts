#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */

import { join } from 'path'
// import { v2 as cloudinary } from 'cloudinary'

import { db } from 'db'

require('dotenv-expand')(require('dotenv-flow').config({ silent: false }))

async function main() {
  const players = await db.player.findMany()

  for (const player of players) {
    const fullPath = join('db/backups/images/players', `${player.id}.png`)

    console.log(fullPath)

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

    try {
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
