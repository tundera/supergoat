import { mutationField, nonNull } from 'nexus'

export const ImageDeleteOneMutation = mutationField('deleteOneImage', {
  type: 'Image',
  args: {
    where: nonNull('ImageWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { db, select }) => {
    return db.image.delete({
      where,
      ...select,
    })
  },
})
