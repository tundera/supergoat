import { queryField, nonNull } from 'nexus'

export const SessionFindUniqueQuery = queryField('findUniqueSession', {
  type: 'Session',
  args: {
    where: nonNull('SessionWhereUniqueInput'),
  },
  resolve(_parent, { where }, { db, select }) {
    return db.session.findUnique({
      where,
      ...select,
    })
  },
})
