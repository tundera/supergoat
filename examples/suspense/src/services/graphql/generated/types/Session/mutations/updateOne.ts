import { mutationField, nonNull } from 'nexus'

export const SessionUpdateOneMutation = mutationField('updateOneSession', {
  type: nonNull('Session'),
  args: {
    where: nonNull('SessionWhereUniqueInput'),
    data: nonNull('SessionUpdateInput'),
  },
  resolve(_parent, { data, where }, { db, select }) {
    return db.session.update({
      where,
      data,
      ...select,
    })
  },
})
