import { queryField, nonNull, list } from 'nexus'

export const PlayerFindManyQuery = queryField('findManyPlayer', {
  type: nonNull(list(nonNull('Player'))),
  args: {
    where: 'PlayerWhereInput',
    orderBy: list('PlayerOrderByInput'),
    cursor: 'PlayerWhereUniqueInput',
    distinct: 'PlayerScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.player.findMany({
      ...args,
      ...select,
    })
  },
})
