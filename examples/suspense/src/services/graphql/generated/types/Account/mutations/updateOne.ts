import { mutationField, nonNull } from 'nexus'

export const AccountUpdateOneMutation = mutationField('updateOneAccount', {
  type: nonNull('Account'),
  args: {
    where: nonNull('AccountWhereUniqueInput'),
    data: nonNull('AccountUpdateInput'),
  },
  resolve(_parent, { data, where }, { db, select }) {
    return db.account.update({
      where,
      data,
      ...select,
    })
  },
})
