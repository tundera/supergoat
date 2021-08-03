import type { BackupColorSchemeData, ColorScheme } from '../../types'
import db from '../index'

export const transformColorSchemeData = (scheme: BackupColorSchemeData) => {
  return {
    ...scheme,
    id: scheme.id.toString(),
    createdAt: new Date(scheme.createdAt),
    updatedAt: new Date(),
    teamId: scheme.teamId,
  }
}

export const seedColorSchemes = async (scheme: ColorScheme) => {
  await db.colorScheme.create({
    data: {
      id: scheme.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      primary: scheme.primary,
      secondary: scheme.secondary,
    },
  })

  // // Connect schemes to teams
  if (scheme.teamId) {
    await db.colorScheme.update({
      where: { id: scheme.id },
      data: {
        team: {
          connect: {
            id: scheme.teamId,
          },
        },
      },
    })
  } else {
    await db.colorScheme.update({
      where: { id: scheme.id },
      data: {
        team: {
          disconnect: true,
        },
      },
    })
  }
}
