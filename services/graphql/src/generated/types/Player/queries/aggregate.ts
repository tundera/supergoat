import { queryField, list } from 'nexus'

export const PlayerAggregateQuery = queryField('aggregatePlayer', {
  type: 'AggregatePlayer',
  args: {
    where: 'PlayerWhereInput',
    orderBy: list('PlayerOrderByInput'),
    cursor: 'PlayerWhereUniqueInput',
    distinct: 'PlayerScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.player.aggregate({ ...args, ...select }) as any
  },
})
