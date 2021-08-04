import { mutationField, nonNull } from 'nexus'

export const UserUpsertOneMutation = mutationField('upsertOneUser', {
  type: nonNull('User'),
  args: {
    where: nonNull('UserWhereUniqueInput'),
    create: nonNull('UserCreateInput'),
    update: nonNull('UserUpdateInput'),
  },
  resolve(_parent, args, { db, select }) {
    return db.user.upsert({
      ...args,
      ...select,
    })
  },
})
