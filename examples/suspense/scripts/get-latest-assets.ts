/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs'
import path from 'path'
import download from 'download'
import ora from 'ora'
import chalk from 'chalk'

import db from 'db'

require('dotenv-expand')(require('dotenv-flow').config({ silent: true }))

const main = async () => {
  const logger = fs.createWriteStream(path.join(process.cwd(), 'scripts/errors.log'))

  const getLogo = async (teamId: string) => {
    const destination = path.join(process.cwd(), 'db/backups/images/teams')

    try {
      await download(`https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`, destination, {
        filename: `${teamId}.svg`,
      })
    } catch (err) {
      logger.write(err.message + '\n')
    }
  }

  const getCoachHeadshots = async (teamId: string) => {
    const coaches = await db.coach.findMany({ where: { teamId: teamId } })

    for (const coach of coaches) {
      const destination = path.join(process.cwd(), 'db/backups/images/coaches')

      try {
        await download(
          `https://cdn.nba.com/headshots/nba/latest/1040x760/${coach.id}.png`,
          destination,
        )
      } catch (err) {
        logger.write(err.message)
      }
    }
  }

  const getPlayerHeadshots = async (teamId: string) => {
    const players = await db.player.findMany({ where: { teamId: teamId } })

    for (const player of players) {
      const destination = path.join(process.cwd(), 'db/backups/images/players')

      try {
        await download(
          `https://cdn.nba.com/headshots/nba/latest/1040x760/${player.id}.png`,
          destination,
        )
      } catch (err) {
        logger.write(err.message)
      }
    }
  }

  const spinner = ora({
    text: `Getting most up-to-date team assets`,
    stream: process.stdout,
  }).start()

  const teams = await db.team.findMany({
    orderBy: { city: 'asc' },
  })

  for (const team of teams) {
    spinner.text = `Downloading team assets for the ${chalk.cyanBright(
      `${team.city} ${team.name}`,
    )}`

    try {
      await Promise.allSettled([
        getLogo(team.id),
        getCoachHeadshots(team.id),
        getPlayerHeadshots(team.id),
      ])
    } catch (err) {
      console.log(err)
    }
  }

  spinner.succeed(`Done downloading assets`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
