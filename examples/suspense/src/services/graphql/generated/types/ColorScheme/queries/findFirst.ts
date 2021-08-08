import { queryField, list } from 'nexus'

export const ColorSchemeFindFirstQuery = queryField('findFirstColorScheme', {
  type: 'ColorScheme',
  args: {
    where: 'ColorSchemeWhereInput',
    orderBy: list('ColorSchemeOrderByInput'),
    cursor: 'ColorSchemeWhereUniqueInput',
    distinct: 'ColorSchemeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.colorScheme.findFirst({
      ...args,
      ...select,
    })
  },
})
