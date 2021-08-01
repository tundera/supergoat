import { queryField, list } from 'nexus'

export const TeamFindFirstQuery = queryField('findFirstTeam', {
  type: 'Team',
  args: {
    where: 'TeamWhereInput',
    orderBy: list('TeamOrderByInput'),
    cursor: 'TeamWhereUniqueInput',
    distinct: 'TeamScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.team.findFirst({
      ...args,
      ...select,
    })
  },
})
