import { mutationField, nonNull } from 'nexus'

export const SessionDeleteOneMutation = mutationField('deleteOneSession', {
  type: 'Session',
  args: {
    where: nonNull('SessionWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { db, select }) => {
    return db.session.delete({
      where,
      ...select,
    })
  },
})
