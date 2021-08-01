import { mutationField, nonNull } from 'nexus'

export const AccountUpsertOneMutation = mutationField('upsertOneAccount', {
  type: nonNull('Account'),
  args: {
    where: nonNull('AccountWhereUniqueInput'),
    create: nonNull('AccountCreateInput'),
    update: nonNull('AccountUpdateInput'),
  },
  resolve(_parent, args, { db, select }) {
    return db.account.upsert({
      ...args,
      ...select,
    })
  },
})
