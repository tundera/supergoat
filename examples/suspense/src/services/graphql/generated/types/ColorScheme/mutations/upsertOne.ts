import { mutationField, nonNull } from 'nexus'

export const ColorSchemeUpsertOneMutation = mutationField(
  'upsertOneColorScheme',
  {
    type: nonNull('ColorScheme'),
    args: {
      where: nonNull('ColorSchemeWhereUniqueInput'),
      create: nonNull('ColorSchemeCreateInput'),
      update: nonNull('ColorSchemeUpdateInput'),
    },
    resolve(_parent, args, { db, select }) {
      return db.colorScheme.upsert({
        ...args,
        ...select,
      })
    },
  },
)
