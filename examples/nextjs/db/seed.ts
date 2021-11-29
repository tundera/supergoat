import task from 'tasuku'

import db from 'db'

import { colorSchemes, images, coaches, players, teams } from 'db/helpers/data'
import { seedCoachData, transformCoachData } from 'db/helpers/coaches'
import { seedColorSchemesData, transformColorSchemeData } from 'db/helpers/colorSchemes'
import { seedPlayerData, transformPlayerData } from 'db/helpers/players'
import { seedTeamData, transformTeamData } from 'db/helpers/teams'
import { seedImageData, transformImageData } from 'db/helpers/images'

const seeds = async () => {
  const seedTeams = async () => {
    for (const team of teams) {
      const data = transformTeamData(team)
      await seedTeamData(data)
    }
  }

  const seedPlayers = async () => {
    for (const player of players) {
      const data = transformPlayerData(player)
      await seedPlayerData(data)
    }
  }

  const seedCoaches = async () => {
    for (const coach of coaches) {
      const data = transformCoachData(coach)
      await seedCoachData(data)
    }
  }

  const seedColorSchemes = async () => {
    for (const colorScheme of colorSchemes) {
      const data = transformColorSchemeData(colorScheme)
      await seedColorSchemesData(data)
    }
  }

  const seedImages = async () => {
    for (const image of images) {
      const data = transformImageData(image)
      await seedImageData(data)
    }
  }

  const runSeedTasks = async () => {
    await task('Seeding data', async ({ task, setTitle }) => {
      await task.group((task) => [
        task('Project workspaces', async ({ task }) => {
          const seedTasks = await task.group(
            (task) => [
              task('Seeding color schemes', async () => await seedColorSchemes()),
              task('Seeding images', async () => await seedImages()),
              task('Seeding teams', async () => await seedTeams()),
              task('Seeding players', async () => await seedPlayers()),
              task('Seeding coaches', async () => await seedCoaches()),
            ],
            { concurrency: Infinity },
          )

          seedTasks.clear()
        }),
      ])

      setTitle('Done seeding data')
    })
  }

  await runSeedTasks()
}

const main = async () => {
  await seeds()
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
    process.exit(0)
  })

export default seeds
