import { queryField, nonNull, list } from 'nexus'

export const ColorSchemeFindManyQuery = queryField('findManyColorScheme', {
  type: nonNull(list(nonNull('ColorScheme'))),
  args: {
    where: 'ColorSchemeWhereInput',
    orderBy: list('ColorSchemeOrderByInput'),
    cursor: 'ColorSchemeWhereUniqueInput',
    distinct: 'ColorSchemeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.colorScheme.findMany({
      ...args,
      ...select,
    })
  },
})
