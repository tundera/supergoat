import type { KeystoneContext } from '@keystone-next/keystone/types'

import execa from 'execa'
import Listr from 'listr'

import { extractImageOfId } from './utils'

import imageDocuments from './documents/filtered/images.json'
import colorSchemeDocuments from './documents/filtered/color-schemes.json'
import coachDocuments from './documents/filtered/coaches.json'
import playerDocuments from './documents/filtered/players.json'
import teamDocuments from './documents/filtered/teams.json'
import teamColors from './documents/team-colors.json'

export const createColorSchemes = async (context: KeystoneContext) => {
  for (const colorScheme of colorSchemeDocuments) {
    await context.query.ColorScheme.createOne({ data: colorScheme, query: 'id' })
  }
}

export const createImages = async (context: KeystoneContext) => {
  for (const image of imageDocuments) {
    await context.query.Image.createOne({ data: image, query: 'id' })
  }
}

export const createPlayers = async (context: KeystoneContext) => {
  for (const player of playerDocuments) {
    await context.query.Player.createOne({ data: player, query: 'id' })
  }
}

export const createCoaches = async (context: KeystoneContext) => {
  for (const coach of coachDocuments) {
    await context.query.Coach.createOne({ data: coach, query: 'id' })
  }
}

export const createTeams = async (context: KeystoneContext) => {
  for (const team of teamDocuments) {
    await context.query.Team.createOne({ data: team, query: 'id' })
  }
}

export const connectImages = async (context: KeystoneContext) => {
  const images = (await import('./documents/raw/images.json')).default

  for (const image of images) {
    if (image.url.includes('teams')) {
      const teamId = extractImageOfId(image.url, 'svg')
      await context.query.Image.updateOne({
        where: {
          id: image.id,
        },
        data: {
          team: {
            connect: {
              handle: teamId,
            },
          },
        },
        query: 'id',
      })
    } else {
      if (image.url.includes('coaches')) {
        const coachId = extractImageOfId(image.url, 'png')
        await context.query.Image.updateOne({
          where: {
            id: image.id,
          },
          data: {
            coach: {
              connect: {
                handle: coachId,
              },
            },
          },
          query: 'id',
        })
      } else {
        const playerId = extractImageOfId(image.url, 'png')
        await context.query.Image.updateOne({
          where: {
            id: image.id,
          },
          data: {
            player: {
              connect: {
                handle: playerId,
              },
            },
          },
          query: 'id',
        })
      }
    }
  }
}

export const connectTeams = async (context: KeystoneContext) => {
  const teams = (await import('./documents/raw/teams.json')).default
  const colorSchemes = (await import('./documents/raw/color-schemes.json')).default

  const teamPlayers = (await import('./documents/player-ids.json')).default
  const teamCoaches = (await import('./documents/coach-ids.json')).default

  for (const team of teams) {
    const playerHandles = teamPlayers
      .find((item) => item.id === team.handle)
      ?.players.map((player) => ({ handle: player.id }))

    const coachHandles = teamCoaches
      .find((item) => item.id === team.handle)
      ?.coaches.map((coach) => ({ handle: coach.id }))

    const colors = teamColors.find((colors) => colors.handle === team.handle)

    const colorScheme = colorSchemes.find(
      (colorScheme) =>
        colorScheme.primary === colors?.primary && colorScheme.secondary === colors?.secondary,
    )

    await context.query.Team.updateOne({
      where: {
        id: team.id,
      },
      data: {
        colorScheme: { connect: { id: colorScheme?.id } },
        players: { connect: playerHandles },
        coaches: { connect: coachHandles },
      },
      query: 'id',
    })
  }
}

export const insertSeedData = async (context: KeystoneContext) => {
  const seedTasks = new Listr(
    [
      {
        title: '🧑‍🎨 Seeding color schemes',
        task: async () => await createColorSchemes(context),
      },
      {
        title: '🖼️ Seeding images',
        task: async () => createImages(context),
      },
      {
        title: '⛹️‍♂️ Seeding players',
        task: async () => createPlayers(context),
      },
      {
        title: '📔 Seeding coaches',
        task: async () => await createCoaches(context),
      },
      {
        title: '🧑‍🤝‍🧑 Seeding teams',
        task: async () => await createTeams(context),
      },
    ],
    { exitOnError: true },
  )
  // Remove relational fields from previously exported data
  console.log('Filtering current table data...')
  await execa('yarn', ['ts-node', '-r', 'tsconfig-paths/register', 'scripts/prepare-data.ts'])

  console.log(`🌱 Inserting seed data`)

  await seedTasks.run()

  // Export inserted table data from the database
  await execa('yarn', ['ts-node', '-r', 'tsconfig-paths/register', 'scripts/export-table-data.ts'])

  console.log('🖼️ Updating images')
  await connectImages(context)

  console.log('🧑‍🤝‍🧑 Updating teams')
  await connectTeams(context)

  console.log(`✅ Seed data inserted`)
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``)
  process.exit()
}
