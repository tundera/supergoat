#!/usr/bin/env node

import 'universal-dotenv/register'

import fs from 'fs'
import path from 'path'
import Listr from 'listr'

import { join } from 'path'
import { v2 as cloudinary } from 'cloudinary'

import db from 'db'

async function main() {
  const logger = fs.createWriteStream(path.join(process.cwd(), 'scripts/errors.log'))

  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })

  const uploadTeamLogos = async () => {
    const teams = await db.team.findMany()

    for (const team of teams) {
      const fullPath = join('db/backups/images/teams', `${team.id}.svg`)

      fs.access(fullPath, (err) => {
        logger.write(`${fullPath} ${err ? 'does not exist' : 'exists'}`)
      })

      try {
        await cloudinary.uploader.upload(fullPath, {
          public_id: `nba/teams/${team.id}`,
          overwrite: true,
        })
      } catch (err) {
        logger.write(err.message + '\n')
      }
    }
  }

  const uploadCoachHeadshots = async () => {
    const coaches = await db.coach.findMany()

    for (const coach of coaches) {
      const fullPath = join('db/backups/images/coaches', `${coach.id}.png`)

      fs.access(fullPath, (err) => {
        logger.write(`${fullPath} ${err ? 'does not exist' : 'exists'}`)
      })

      try {
        await cloudinary.uploader.upload(fullPath, {
          public_id: `nba/coaches/${coach.id}`,
          overwrite: true,
        })
      } catch (err) {
        logger.write(err.message + '\n')
      }
    }
  }

  const uploadPlayerHeadshots = async () => {
    const players = await db.player.findMany()

    for (const player of players) {
      const fullPath = join('db/backups/images/players', `${player.id}.png`)

      fs.access(fullPath, (err) => {
        logger.write(`${fullPath} ${err ? 'does not exist' : 'exists'}`)
      })

      try {
        await cloudinary.uploader.upload(fullPath, {
          public_id: `nba/players/${player.id}`,
          overwrite: true,
        })
      } catch (err) {
        logger.write(err.message + '\n')
      }
    }
  }

  const uploadTasks = new Listr(
    [
      {
        title: 'Uploading team logos',
        task: async () => await uploadTeamLogos(),
      },
      {
        title: 'Uploading coach headshots',
        task: async () => await uploadCoachHeadshots(),
      },
      {
        title: 'Uploading player headshots',
        task: async () => await uploadPlayerHeadshots(),
      },
    ],
    {
      concurrent: true,
      exitOnError: true,
    },
  )

  try {
    await uploadTasks.run()
  } catch (err) {
    logger.write(err.message + '\n')
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
