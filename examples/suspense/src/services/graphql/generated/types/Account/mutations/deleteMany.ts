import { mutationField, nonNull } from 'nexus'

export const AccountDeleteManyMutation = mutationField('deleteManyAccount', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'AccountWhereInput',
  },
  resolve: async (_parent, { where }, { db }) => {
    return db.account.deleteMany({ where } as any)
  },
})
