import { mutationField, nonNull } from 'nexus'

export const CoachCreateOneMutation = mutationField('createOneCoach', {
  type: nonNull('Coach'),
  args: {
    data: nonNull('CoachCreateInput'),
  },
  resolve(_parent, { data }, { db, select }) {
    return db.coach.create({
      data,
      ...select,
    })
  },
})
