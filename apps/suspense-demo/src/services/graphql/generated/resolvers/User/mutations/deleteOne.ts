import { mutationField, nonNull } from 'nexus'

export const UserDeleteOneMutation = mutationField('deleteOneUser', {
  type: 'User',
  args: {
    where: nonNull('UserWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { db, select }) => {
    return db.user.delete({
      where,
      ...select,
    })
  },
})
