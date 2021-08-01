import { Image } from 'nexus-prisma'
import { extendType, list, objectType, stringArg, enumType } from 'nexus'

/**
 * Image Object Type
 */
export const ImageType = objectType({
  name: Image.$name,
  description: Image.$description,
  definition(t) {
    t.field(Image.id.name, Image.id)
    t.field(Image.createdAt.name, Image.createdAt)
    t.field(Image.updatedAt.name, Image.updatedAt)
    t.field(Image.url.name, Image.url)
    t.field(Image.type.name, Image.type)
    t.field(Image.player.name, Image.player)
    t.field(Image.coach.name, Image.coach)
    t.field(Image.team.name, Image.team)
  },
})

/**
 * ImageType Enum Type
 */
export const ImageTypeEnum = enumType({
  name: 'ImageType',
  members: {
    LOGO: 'LOGO',
    HEADSHOT: 'HEADSHOT',
  },
})

/**
 * Image Query Types
 */
export const ImageQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('image', {
      type: 'Image',
      args: {
        id: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.image.findUnique({
          where: { id: args?.id ?? undefined },
        })
      },
    })
    t.field('images', {
      type: list('Image'),
      resolve(_parent, _args, ctx) {
        return ctx.db.image.findMany({})
      },
    })
  },
})
