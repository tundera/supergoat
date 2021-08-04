import { mutationField, nonNull } from 'nexus'

export const TeamUpdateManyMutation = mutationField('updateManyTeam', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TeamWhereInput',
    data: nonNull('TeamUpdateManyMutationInput'),
  },
  resolve(_parent, args, { db }) {
    return db.team.updateMany(args as any)
  },
})
