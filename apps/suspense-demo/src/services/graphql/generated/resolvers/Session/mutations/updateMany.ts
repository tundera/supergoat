import { mutationField, nonNull } from 'nexus'

export const SessionUpdateManyMutation = mutationField('updateManySession', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SessionWhereInput',
    data: nonNull('SessionUpdateManyMutationInput'),
  },
  resolve(_parent, args, { db }) {
    return db.session.updateMany(args as any)
  },
})
