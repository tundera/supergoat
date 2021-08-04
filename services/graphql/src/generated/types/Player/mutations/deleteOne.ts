import { mutationField, nonNull } from 'nexus'

export const PlayerDeleteOneMutation = mutationField('deleteOnePlayer', {
  type: 'Player',
  args: {
    where: nonNull('PlayerWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { db, select }) => {
    return db.player.delete({
      where,
      ...select,
    })
  },
})
