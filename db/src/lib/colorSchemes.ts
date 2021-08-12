import type { ColorScheme } from '@/db'
import type { BackupColorSchemeData } from '@/db/types'

import db from '@/db'

export const transformColorSchemeData = (scheme: BackupColorSchemeData) => {
  return {
    ...scheme,
    id: scheme.id.toString(),
    createdAt: new Date(scheme.createdAt),
    updatedAt: new Date(),
  }
}

export const seedColorSchemesData = async (scheme: ColorScheme) => {
  await db.colorScheme.create({
    data: {
      id: scheme.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      primary: scheme.primary,
      secondary: scheme.secondary,
    },
  })
}
