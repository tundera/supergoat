import { queryField, list } from 'nexus'

export const ImageFindFirstQuery = queryField('findFirstImage', {
  type: 'Image',
  args: {
    where: 'ImageWhereInput',
    orderBy: list('ImageOrderByInput'),
    cursor: 'ImageWhereUniqueInput',
    distinct: 'ImageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.image.findFirst({
      ...args,
      ...select,
    })
  },
})
