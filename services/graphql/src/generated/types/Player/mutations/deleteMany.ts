import { mutationField, nonNull } from 'nexus'

export const PlayerDeleteManyMutation = mutationField('deleteManyPlayer', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'PlayerWhereInput',
  },
  resolve: async (_parent, { where }, { db }) => {
    return db.player.deleteMany({ where } as any)
  },
})
