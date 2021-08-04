import { mutationField, nonNull } from 'nexus'

export const PlayerUpdateManyMutation = mutationField('updateManyPlayer', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'PlayerWhereInput',
    data: nonNull('PlayerUpdateManyMutationInput'),
  },
  resolve(_parent, args, { db }) {
    return db.player.updateMany(args as any)
  },
})
