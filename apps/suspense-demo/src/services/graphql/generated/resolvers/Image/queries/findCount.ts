import { queryField, nonNull, list } from 'nexus'

export const ImageFindCountQuery = queryField('findManyImageCount', {
  type: nonNull('Int'),
  args: {
    where: 'ImageWhereInput',
    orderBy: list('ImageOrderByInput'),
    cursor: 'ImageWhereUniqueInput',
    distinct: 'ImageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db }) {
    return db.image.count(args as any)
  },
})
