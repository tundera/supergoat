import { queryField, nonNull, list } from 'nexus'

export const AccountFindManyQuery = queryField('findManyAccount', {
  type: nonNull(list(nonNull('Account'))),
  args: {
    where: 'AccountWhereInput',
    orderBy: list('AccountOrderByInput'),
    cursor: 'AccountWhereUniqueInput',
    distinct: 'AccountScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.account.findMany({
      ...args,
      ...select,
    })
  },
})
