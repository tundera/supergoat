import { queryField, list } from 'nexus'

export const CoachFindFirstQuery = queryField('findFirstCoach', {
  type: 'Coach',
  args: {
    where: 'CoachWhereInput',
    orderBy: list('CoachOrderByInput'),
    cursor: 'CoachWhereUniqueInput',
    distinct: 'CoachScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.coach.findFirst({
      ...args,
      ...select,
    })
  },
})
