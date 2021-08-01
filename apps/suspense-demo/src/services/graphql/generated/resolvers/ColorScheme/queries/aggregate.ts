import { queryField, list } from 'nexus'

export const ColorSchemeAggregateQuery = queryField('aggregateColorScheme', {
  type: 'AggregateColorScheme',
  args: {
    where: 'ColorSchemeWhereInput',
    orderBy: list('ColorSchemeOrderByInput'),
    cursor: 'ColorSchemeWhereUniqueInput',
    distinct: 'ColorSchemeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.colorScheme.aggregate({ ...args, ...select }) as any
  },
})
