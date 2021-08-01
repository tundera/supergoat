import { queryField, nonNull } from 'nexus'

export const PlayerFindUniqueQuery = queryField('findUniquePlayer', {
  type: 'Player',
  args: {
    where: nonNull('PlayerWhereUniqueInput'),
  },
  resolve(_parent, { where }, { db, select }) {
    return db.player.findUnique({
      where,
      ...select,
    })
  },
})
