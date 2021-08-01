import { queryField, nonNull } from 'nexus'

export const AccountFindUniqueQuery = queryField('findUniqueAccount', {
  type: 'Account',
  args: {
    where: nonNull('AccountWhereUniqueInput'),
  },
  resolve(_parent, { where }, { db, select }) {
    return db.account.findUnique({
      where,
      ...select,
    })
  },
})
