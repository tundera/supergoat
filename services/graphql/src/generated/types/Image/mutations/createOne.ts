import { mutationField, nonNull } from 'nexus'

export const ImageCreateOneMutation = mutationField('createOneImage', {
  type: nonNull('Image'),
  args: {
    data: nonNull('ImageCreateInput'),
  },
  resolve(_parent, { data }, { db, select }) {
    return db.image.create({
      data,
      ...select,
    })
  },
})
