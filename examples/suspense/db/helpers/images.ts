import type { Image, ImageType } from 'db'
import type { BackupImageData } from 'db/types'

import { db } from 'db'

export const transformImageData = (image: BackupImageData) => {
  return {
    ...image,
    id: image.id.toString(),
    createdAt: new Date(image.createdAt),
    updatedAt: new Date(),
    type: image.type as ImageType,
  }
}

export const seedImageData = async (image: Image) => {
  await db.image.create({
    data: {
      id: image.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      url: image.url,
      type: image.type,
    },
  })
}
