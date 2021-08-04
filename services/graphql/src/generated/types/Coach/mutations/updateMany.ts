import { mutationField, nonNull } from 'nexus'

export const CoachUpdateManyMutation = mutationField('updateManyCoach', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CoachWhereInput',
    data: nonNull('CoachUpdateManyMutationInput'),
  },
  resolve(_parent, args, { db }) {
    return db.coach.updateMany(args as any)
  },
})
