import { mutationField, nonNull } from 'nexus'

export const UserDeleteManyMutation = mutationField('deleteManyUser', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'UserWhereInput',
  },
  resolve: async (_parent, { where }, { db }) => {
    return db.user.deleteMany({ where } as any)
  },
})
