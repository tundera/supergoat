import { mutationField, nonNull } from 'nexus'

export const CoachDeleteOneMutation = mutationField('deleteOneCoach', {
  type: 'Coach',
  args: {
    where: nonNull('CoachWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { db, select }) => {
    return db.coach.delete({
      where,
      ...select,
    })
  },
})
