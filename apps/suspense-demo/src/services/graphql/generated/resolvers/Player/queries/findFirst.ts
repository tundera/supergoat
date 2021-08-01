import { queryField, list } from 'nexus'

export const PlayerFindFirstQuery = queryField('findFirstPlayer', {
  type: 'Player',
  args: {
    where: 'PlayerWhereInput',
    orderBy: list('PlayerOrderByInput'),
    cursor: 'PlayerWhereUniqueInput',
    distinct: 'PlayerScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.player.findFirst({
      ...args,
      ...select,
    })
  },
})
