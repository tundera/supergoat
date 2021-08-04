import { mutationField, nonNull } from 'nexus'

export const CoachDeleteManyMutation = mutationField('deleteManyCoach', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CoachWhereInput',
  },
  resolve: async (_parent, { where }, { db }) => {
    return db.coach.deleteMany({ where } as any)
  },
})
