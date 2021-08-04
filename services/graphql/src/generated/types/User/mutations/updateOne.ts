import { mutationField, nonNull } from 'nexus'

export const UserUpdateOneMutation = mutationField('updateOneUser', {
  type: nonNull('User'),
  args: {
    where: nonNull('UserWhereUniqueInput'),
    data: nonNull('UserUpdateInput'),
  },
  resolve(_parent, { data, where }, { db, select }) {
    return db.user.update({
      where,
      data,
      ...select,
    })
  },
})
