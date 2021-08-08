import { queryField, nonNull } from 'nexus'

export const ImageFindUniqueQuery = queryField('findUniqueImage', {
  type: 'Image',
  args: {
    where: nonNull('ImageWhereUniqueInput'),
  },
  resolve(_parent, { where }, { db, select }) {
    return db.image.findUnique({
      where,
      ...select,
    })
  },
})
