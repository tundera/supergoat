import { queryField, list } from 'nexus'

export const AccountFindFirstQuery = queryField('findFirstAccount', {
  type: 'Account',
  args: {
    where: 'AccountWhereInput',
    orderBy: list('AccountOrderByInput'),
    cursor: 'AccountWhereUniqueInput',
    distinct: 'AccountScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.account.findFirst({
      ...args,
      ...select,
    })
  },
})
