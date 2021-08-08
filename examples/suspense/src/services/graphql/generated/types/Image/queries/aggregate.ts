import { queryField, list } from 'nexus'

export const ImageAggregateQuery = queryField('aggregateImage', {
  type: 'AggregateImage',
  args: {
    where: 'ImageWhereInput',
    orderBy: list('ImageOrderByInput'),
    cursor: 'ImageWhereUniqueInput',
    distinct: 'ImageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.image.aggregate({ ...args, ...select }) as any
  },
})
