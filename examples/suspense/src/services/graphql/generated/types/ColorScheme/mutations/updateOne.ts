import { mutationField, nonNull } from 'nexus'

export const ColorSchemeUpdateOneMutation = mutationField(
  'updateOneColorScheme',
  {
    type: nonNull('ColorScheme'),
    args: {
      where: nonNull('ColorSchemeWhereUniqueInput'),
      data: nonNull('ColorSchemeUpdateInput'),
    },
    resolve(_parent, { data, where }, { db, select }) {
      return db.colorScheme.update({
        where,
        data,
        ...select,
      })
    },
  },
)
