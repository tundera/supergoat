import { queryField, nonNull, list } from 'nexus'

export const SessionFindCountQuery = queryField('findManySessionCount', {
  type: nonNull('Int'),
  args: {
    where: 'SessionWhereInput',
    orderBy: list('SessionOrderByInput'),
    cursor: 'SessionWhereUniqueInput',
    distinct: 'SessionScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db }) {
    return db.session.count(args as any)
  },
})
