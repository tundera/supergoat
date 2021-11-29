import { Image } from 'nexus-prisma'
import { extendType, objectType, enumType } from 'nexus'

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

export const ImageTypeEnum = enumType({
  name: 'ImageType',
  members: {
    LOGO: 'LOGO',
    HEADSHOT: 'HEADSHOT',
  },
})

export const ImageQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.image()
    t.crud.images({ filtering: true, ordering: true })
  },
})

export const ImageMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneImage()
    t.crud.updateOneImage()
  },
})
