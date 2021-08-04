import { mutationField, nonNull } from 'nexus'

export const AccountDeleteOneMutation = mutationField('deleteOneAccount', {
  type: 'Account',
  args: {
    where: nonNull('AccountWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { db, select }) => {
    return db.account.delete({
      where,
      ...select,
    })
  },
})
