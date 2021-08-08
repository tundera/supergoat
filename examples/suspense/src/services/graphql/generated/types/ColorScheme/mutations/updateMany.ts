import { mutationField, nonNull } from 'nexus'

export const ColorSchemeUpdateManyMutation = mutationField('updateManyColorScheme', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ColorSchemeWhereInput',
    data: nonNull('ColorSchemeUpdateManyMutationInput'),
  },
  resolve(_parent, args, { db }) {
    return db.colorScheme.updateMany(args as any)
  },
})
