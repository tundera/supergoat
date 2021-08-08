import { mutationField, nonNull } from 'nexus'

export const ColorSchemeDeleteManyMutation = mutationField('deleteManyColorScheme', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ColorSchemeWhereInput',
  },
  resolve: async (_parent, { where }, { db }) => {
    return db.colorScheme.deleteMany({ where } as any)
  },
})
