import { mutationField, nonNull } from 'nexus'

export const TeamUpdateOneMutation = mutationField('updateOneTeam', {
  type: nonNull('Team'),
  args: {
    where: nonNull('TeamWhereUniqueInput'),
    data: nonNull('TeamUpdateInput'),
  },
  resolve(_parent, { data, where }, { db, select }) {
    return db.team.update({
      where,
      data,
      ...select,
    })
  },
})
