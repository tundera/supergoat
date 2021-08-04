import { queryField, nonNull, list } from 'nexus'

export const PlayerFindCountQuery = queryField('findManyPlayerCount', {
  type: nonNull('Int'),
  args: {
    where: 'PlayerWhereInput',
    orderBy: list('PlayerOrderByInput'),
    cursor: 'PlayerWhereUniqueInput',
    distinct: 'PlayerScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db }) {
    return db.player.count(args as any)
  },
})
