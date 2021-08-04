import { mutationField, nonNull } from 'nexus'

export const ImageUpdateOneMutation = mutationField('updateOneImage', {
  type: nonNull('Image'),
  args: {
    where: nonNull('ImageWhereUniqueInput'),
    data: nonNull('ImageUpdateInput'),
  },
  resolve(_parent, { data, where }, { db, select }) {
    return db.image.update({
      where,
      data,
      ...select,
    })
  },
})
