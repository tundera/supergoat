import { mutationField, nonNull } from 'nexus'

export const ColorSchemeDeleteOneMutation = mutationField(
  'deleteOneColorScheme',
  {
    type: 'ColorScheme',
    args: {
      where: nonNull('ColorSchemeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { db, select }) => {
      return db.colorScheme.delete({
        where,
        ...select,
      })
    },
  },
)
