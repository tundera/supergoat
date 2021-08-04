import { queryField, nonNull, list } from 'nexus'

export const SessionFindManyQuery = queryField('findManySession', {
  type: nonNull(list(nonNull('Session'))),
  args: {
    where: 'SessionWhereInput',
    orderBy: list('SessionOrderByInput'),
    cursor: 'SessionWhereUniqueInput',
    distinct: 'SessionScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.session.findMany({
      ...args,
      ...select,
    })
  },
})
