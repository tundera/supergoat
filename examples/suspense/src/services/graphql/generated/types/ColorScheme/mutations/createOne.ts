import { mutationField, nonNull } from 'nexus'

export const ColorSchemeCreateOneMutation = mutationField('createOneColorScheme', {
  type: nonNull('ColorScheme'),
  args: {
    data: nonNull('ColorSchemeCreateInput'),
  },
  resolve(_parent, { data }, { db, select }) {
    return db.colorScheme.create({
      data,
      ...select,
    })
  },
})
