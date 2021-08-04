import { queryField, nonNull, list } from 'nexus'

export const TeamFindManyQuery = queryField('findManyTeam', {
  type: nonNull(list(nonNull('Team'))),
  args: {
    where: 'TeamWhereInput',
    orderBy: list('TeamOrderByInput'),
    cursor: 'TeamWhereUniqueInput',
    distinct: 'TeamScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.team.findMany({
      ...args,
      ...select,
    })
  },
})
