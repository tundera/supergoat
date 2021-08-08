import { queryField, nonNull, list } from 'nexus'

export const ColorSchemeFindCountQuery = queryField('findManyColorSchemeCount', {
  type: nonNull('Int'),
  args: {
    where: 'ColorSchemeWhereInput',
    orderBy: list('ColorSchemeOrderByInput'),
    cursor: 'ColorSchemeWhereUniqueInput',
    distinct: 'ColorSchemeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db }) {
    return db.colorScheme.count(args as any)
  },
})
