import { mutationField, nonNull } from 'nexus'

export const TeamDeleteManyMutation = mutationField('deleteManyTeam', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TeamWhereInput',
  },
  resolve: async (_parent, { where }, { db }) => {
    return db.team.deleteMany({ where } as any)
  },
})
