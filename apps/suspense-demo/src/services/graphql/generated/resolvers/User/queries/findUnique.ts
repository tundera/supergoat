import { queryField, nonNull } from 'nexus'

export const UserFindUniqueQuery = queryField('findUniqueUser', {
  type: 'User',
  args: {
    where: nonNull('UserWhereUniqueInput'),
  },
  resolve(_parent, { where }, { db, select }) {
    return db.user.findUnique({
      where,
      ...select,
    })
  },
})
