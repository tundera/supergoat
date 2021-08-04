import { queryField, nonNull, list } from 'nexus'

export const ImageFindManyQuery = queryField('findManyImage', {
  type: nonNull(list(nonNull('Image'))),
  args: {
    where: 'ImageWhereInput',
    orderBy: list('ImageOrderByInput'),
    cursor: 'ImageWhereUniqueInput',
    distinct: 'ImageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.image.findMany({
      ...args,
      ...select,
    })
  },
})
