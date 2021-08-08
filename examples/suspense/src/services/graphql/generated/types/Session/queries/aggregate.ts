import { queryField, list } from 'nexus'

export const SessionAggregateQuery = queryField('aggregateSession', {
  type: 'AggregateSession',
  args: {
    where: 'SessionWhereInput',
    orderBy: list('SessionOrderByInput'),
    cursor: 'SessionWhereUniqueInput',
    distinct: 'SessionScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.session.aggregate({ ...args, ...select }) as any
  },
})
