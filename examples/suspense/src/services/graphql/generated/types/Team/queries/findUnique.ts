import { queryField, nonNull } from 'nexus'

export const TeamFindUniqueQuery = queryField('findUniqueTeam', {
  type: 'Team',
  args: {
    where: nonNull('TeamWhereUniqueInput'),
  },
  resolve(_parent, { where }, { db, select }) {
    return db.team.findUnique({
      where,
      ...select,
    })
  },
})
