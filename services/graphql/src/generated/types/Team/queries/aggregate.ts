import { queryField, list } from 'nexus'

export const TeamAggregateQuery = queryField('aggregateTeam', {
  type: 'AggregateTeam',
  args: {
    where: 'TeamWhereInput',
    orderBy: list('TeamOrderByInput'),
    cursor: 'TeamWhereUniqueInput',
    distinct: 'TeamScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.team.aggregate({ ...args, ...select }) as any
  },
})
