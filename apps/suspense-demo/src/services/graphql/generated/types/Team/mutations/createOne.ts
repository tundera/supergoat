import { mutationField, nonNull } from 'nexus'

export const TeamCreateOneMutation = mutationField('createOneTeam', {
  type: nonNull('Team'),
  args: {
    data: nonNull('TeamCreateInput'),
  },
  resolve(_parent, { data }, { db, select }) {
    return db.team.create({
      data,
      ...select,
    })
  },
})
