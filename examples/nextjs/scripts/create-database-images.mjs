#!/usr/bin/env node

import path from 'path'
import db from 'db'

const createImages = async () => {
  const teams = await db.team.findMany()
  const players = await db.player.findMany()
  const coaches = await db.coach.findMany()

  for (const team of teams) {
    await db.image.createMany({
      data: {
        id: `nba/teams/${team.id}`,
        url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/nba/teams/${team.id}.svg`,
        type: 'LOGO',
      },
    })
  }

  for (const coach of coaches) {
    await db.image.createMany({
      data: {
        id: `nba/coaches/${coach.id}`,
        url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/nba/coaches/${coach.id}.png`,
        type: 'HEADSHOT',
      },
    })
  }

  for (const player of players) {
    await db.image.createMany({
      data: {
        id: `nba/players/${player.id}`,
        url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/nba/players/${player.id}.png`,
        type: 'HEADSHOT',
      },
    })
  }
}

const updateModelImages = async () => {
  const images = await db.image.findMany()

  for (const image of images) {
    const basename = path.basename(image.id)

    if (await db.coach.findUnique({ where: { id: basename } })) {
      await db.coach.update({
        where: { id: basename },
        data: {
          image: {
            connect: {
              id: image.id,
            },
          },
        },
      })
    } else if (await db.player.findUnique({ where: { id: basename } })) {
      await db.player.update({
        where: { id: basename },
        data: {
          image: {
            connect: {
              id: image.id,
            },
          },
        },
      })
    } else if (await db.team.findUnique({ where: { id: basename } })) {
      await db.team.update({
        where: { id: basename },
        data: {
          logo: {
            connect: {
              id: image.id,
            },
          },
        },
      })
    }
  }
}

const main = async () => {
  await createImages()
  await updateModelImages()
  // await updateTeamColorSchemes()
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
