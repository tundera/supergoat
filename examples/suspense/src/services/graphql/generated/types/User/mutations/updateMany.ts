import { mutationField, nonNull } from 'nexus'

export const UserUpdateManyMutation = mutationField('updateManyUser', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'UserWhereInput',
    data: nonNull('UserUpdateManyMutationInput'),
  },
  resolve(_parent, args, { db }) {
    return db.user.updateMany(args as any)
  },
})
