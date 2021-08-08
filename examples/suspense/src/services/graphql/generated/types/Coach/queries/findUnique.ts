import { queryField, nonNull } from 'nexus'

export const CoachFindUniqueQuery = queryField('findUniqueCoach', {
  type: 'Coach',
  args: {
    where: nonNull('CoachWhereUniqueInput'),
  },
  resolve(_parent, { where }, { db, select }) {
    return db.coach.findUnique({
      where,
      ...select,
    })
  },
})
