import { queryField, list } from 'nexus'

export const CoachAggregateQuery = queryField('aggregateCoach', {
  type: 'AggregateCoach',
  args: {
    where: 'CoachWhereInput',
    orderBy: list('CoachOrderByInput'),
    cursor: 'CoachWhereUniqueInput',
    distinct: 'CoachScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.coach.aggregate({ ...args, ...select }) as any
  },
})
