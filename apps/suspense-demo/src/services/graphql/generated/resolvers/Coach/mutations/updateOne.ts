import { mutationField, nonNull } from 'nexus'

export const CoachUpdateOneMutation = mutationField('updateOneCoach', {
  type: nonNull('Coach'),
  args: {
    where: nonNull('CoachWhereUniqueInput'),
    data: nonNull('CoachUpdateInput'),
  },
  resolve(_parent, { data, where }, { db, select }) {
    return db.coach.update({
      where,
      data,
      ...select,
    })
  },
})
