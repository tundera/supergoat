import { queryField, nonNull } from 'nexus'

export const ColorSchemeFindUniqueQuery = queryField('findUniqueColorScheme', {
  type: 'ColorScheme',
  args: {
    where: nonNull('ColorSchemeWhereUniqueInput'),
  },
  resolve(_parent, { where }, { db, select }) {
    return db.colorScheme.findUnique({
      where,
      ...select,
    })
  },
})
