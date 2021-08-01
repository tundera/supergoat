import { queryField, nonNull, list } from 'nexus'

export const AccountFindCountQuery = queryField('findManyAccountCount', {
  type: nonNull('Int'),
  args: {
    where: 'AccountWhereInput',
    orderBy: list('AccountOrderByInput'),
    cursor: 'AccountWhereUniqueInput',
    distinct: 'AccountScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db }) {
    return db.account.count(args as any)
  },
})
