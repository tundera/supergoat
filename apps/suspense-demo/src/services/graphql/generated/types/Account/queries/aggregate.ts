import { queryField, list } from 'nexus'

export const AccountAggregateQuery = queryField('aggregateAccount', {
  type: 'AggregateAccount',
  args: {
    where: 'AccountWhereInput',
    orderBy: list('AccountOrderByInput'),
    cursor: 'AccountWhereUniqueInput',
    distinct: 'AccountScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.account.aggregate({ ...args, ...select }) as any
  },
})
