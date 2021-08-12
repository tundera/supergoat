import type { Player } from '@/db'
import type { BackupPlayerData, PlayerData } from '@/db/types'

import db from '@/db'

export const transformPlayerData = (player: BackupPlayerData) => {
  return {
    ...player,
    id: player.id,
    createdAt: new Date(player.createdAt),
    updatedAt: new Date(),
    handle: player.handle,
    weight: player.weight,
    height: player.height,
    number: player.number,
    teamId: player.teamId,
  }
}

export const upsertPlayerData = async (player: PlayerData) => {
  await db.player.upsert({
    where: { id: player.playerId.toString() },
    create: {
      id: player.playerId.toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: player.playerId.toString(),
      name: player.player,
      slug: player.playerSlug,
      height: player.height,
      weight: player.weight,
      number: player.num,
      position: player.position,
    },
    update: {
      id: player.playerId.toString(),
      updatedAt: new Date(),
      height: player.height,
      weight: player.weight,
      number: player.num,
      position: player.position,
    },
  })

  // Connect players to or remove players from teams
  if (player.teamID) {
    await db.player.update({
      where: { id: player.playerId.toString() },
      data: {
        team: {
          connect: {
            id: player.teamID.toString(),
          },
        },
      },
    })
  } else {
    await db.player.update({
      where: { id: player.playerId.toString() },
      data: {
        team: {
          disconnect: true,
        },
      },
    })
  }
}

export const seedPlayerData = async (player: Player) => {
  // Create player in database
  await db.player.create({
    data: {
      id: player.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: player.handle,
      name: player.name,
      slug: player.slug,
      height: player.height,
      weight: player.weight,
      number: player.number,
      position: player.position,
    },
  })

  // Connect players to or remove players from teams
  if (player.teamId) {
    await db.player.update({
      where: { id: player.id.toString() },
      data: {
        team: {
          connect: {
            id: player.teamId.toString(),
          },
        },
      },
    })
  } else {
    await db.player.update({
      where: { id: player.id.toString() },
      data: {
        team: {
          disconnect: true,
        },
      },
    })
  }

  // Connect players to images
  if (player.imageId) {
    await db.player.update({
      where: { id: player.id.toString() },
      data: {
        image: {
          connect: {
            id: player.imageId as string,
          },
        },
      },
    })
  }
}
