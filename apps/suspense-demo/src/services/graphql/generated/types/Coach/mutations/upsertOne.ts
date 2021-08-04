import { mutationField, nonNull } from 'nexus'

export const CoachUpsertOneMutation = mutationField('upsertOneCoach', {
  type: nonNull('Coach'),
  args: {
    where: nonNull('CoachWhereUniqueInput'),
    create: nonNull('CoachCreateInput'),
    update: nonNull('CoachUpdateInput'),
  },
  resolve(_parent, args, { db, select }) {
    return db.coach.upsert({
      ...args,
      ...select,
    })
  },
})
