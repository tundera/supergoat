import { mutationField, nonNull } from 'nexus'

export const PlayerCreateOneMutation = mutationField('createOnePlayer', {
  type: nonNull('Player'),
  args: {
    data: nonNull('PlayerCreateInput'),
  },
  resolve(_parent, { data }, { db, select }) {
    return db.player.create({
      data,
      ...select,
    })
  },
})
