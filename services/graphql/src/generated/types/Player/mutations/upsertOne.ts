import { mutationField, nonNull } from 'nexus'

export const PlayerUpsertOneMutation = mutationField('upsertOnePlayer', {
  type: nonNull('Player'),
  args: {
    where: nonNull('PlayerWhereUniqueInput'),
    create: nonNull('PlayerCreateInput'),
    update: nonNull('PlayerUpdateInput'),
  },
  resolve(_parent, args, { db, select }) {
    return db.player.upsert({
      ...args,
      ...select,
    })
  },
})
