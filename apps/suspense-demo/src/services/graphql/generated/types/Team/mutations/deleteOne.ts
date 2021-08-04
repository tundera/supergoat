import { mutationField, nonNull } from 'nexus'

export const TeamDeleteOneMutation = mutationField('deleteOneTeam', {
  type: 'Team',
  args: {
    where: nonNull('TeamWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { db, select }) => {
    return db.team.delete({
      where,
      ...select,
    })
  },
})
