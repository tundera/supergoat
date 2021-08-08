import { mutationField, nonNull } from 'nexus'

export const AccountCreateOneMutation = mutationField('createOneAccount', {
  type: nonNull('Account'),
  args: {
    data: nonNull('AccountCreateInput'),
  },
  resolve(_parent, { data }, { db, select }) {
    return db.account.create({
      data,
      ...select,
    })
  },
})
