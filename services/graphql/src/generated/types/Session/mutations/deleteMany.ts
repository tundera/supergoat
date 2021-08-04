import { mutationField, nonNull } from 'nexus'

export const SessionDeleteManyMutation = mutationField('deleteManySession', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SessionWhereInput',
  },
  resolve: async (_parent, { where }, { db }) => {
    return db.session.deleteMany({ where } as any)
  },
})
