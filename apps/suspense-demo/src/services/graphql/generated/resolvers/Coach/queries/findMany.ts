import { queryField, nonNull, list } from 'nexus'

export const CoachFindManyQuery = queryField('findManyCoach', {
  type: nonNull(list(nonNull('Coach'))),
  args: {
    where: 'CoachWhereInput',
    orderBy: list('CoachOrderByInput'),
    cursor: 'CoachWhereUniqueInput',
    distinct: 'CoachScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.coach.findMany({
      ...args,
      ...select,
    })
  },
})
