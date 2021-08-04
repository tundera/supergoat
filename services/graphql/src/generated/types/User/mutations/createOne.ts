import { mutationField, nonNull } from 'nexus'

export const UserCreateOneMutation = mutationField('createOneUser', {
  type: nonNull('User'),
  args: {
    data: nonNull('UserCreateInput'),
  },
  resolve(_parent, { data }, { db, select }) {
    return db.user.create({
      data,
      ...select,
    })
  },
})
