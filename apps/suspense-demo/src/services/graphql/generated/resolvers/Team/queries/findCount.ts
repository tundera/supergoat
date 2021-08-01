import { queryField, nonNull, list } from 'nexus'

export const TeamFindCountQuery = queryField('findManyTeamCount', {
  type: nonNull('Int'),
  args: {
    where: 'TeamWhereInput',
    orderBy: list('TeamOrderByInput'),
    cursor: 'TeamWhereUniqueInput',
    distinct: 'TeamScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db }) {
    return db.team.count(args as any)
  },
})
