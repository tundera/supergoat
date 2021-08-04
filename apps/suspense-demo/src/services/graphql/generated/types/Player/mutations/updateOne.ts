import { mutationField, nonNull } from 'nexus'

export const PlayerUpdateOneMutation = mutationField('updateOnePlayer', {
  type: nonNull('Player'),
  args: {
    where: nonNull('PlayerWhereUniqueInput'),
    data: nonNull('PlayerUpdateInput'),
  },
  resolve(_parent, { data, where }, { db, select }) {
    return db.player.update({
      where,
      data,
      ...select,
    })
  },
})
