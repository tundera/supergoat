import Listr from 'listr'
import db from '@/db'

import { colorSchemes, images, coaches, players, teams } from '@/db/lib/data'
import { seedCoachData, transformCoachData } from '@/db/lib/coaches'
import { seedColorSchemesData, transformColorSchemeData } from '@/db/lib/colorSchemes'
import { seedPlayerData, transformPlayerData } from '@/db/lib/players'
import { seedTeamData, transformTeamData } from '@/db/lib/teams'
import { seedImageData, transformImageData } from '@/db/lib/images'

const seeds: () => void = async () => {
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

  const seedTasks = new Listr(
    [
      {
        title: 'Seeding colorSchemes',
        task: async () => await seedColorSchemes(),
      },
      {
        title: 'Seeding images',
        task: async () => await seedImages(),
      },
      {
        title: 'Seeding teams',
        task: async () => await seedTeams(),
      },
      {
        title: 'Seeding players',
        task: async () => await seedPlayers(),
      },
      {
        title: 'Seeding coaches',
        task: async () => await seedCoaches(),
      },
    ],
    { exitOnError: true },
  )

  await seedTasks.run()

  console.log('✅ Seeding finished.')
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
