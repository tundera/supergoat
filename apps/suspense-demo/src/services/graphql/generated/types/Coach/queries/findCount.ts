import { queryField, nonNull, list } from 'nexus'

export const CoachFindCountQuery = queryField('findManyCoachCount', {
  type: nonNull('Int'),
  args: {
    where: 'CoachWhereInput',
    orderBy: list('CoachOrderByInput'),
    cursor: 'CoachWhereUniqueInput',
    distinct: 'CoachScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db }) {
    return db.coach.count(args as any)
  },
})
