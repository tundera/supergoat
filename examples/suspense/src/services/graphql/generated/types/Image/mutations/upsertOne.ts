import { mutationField, nonNull } from 'nexus'

export const ImageUpsertOneMutation = mutationField('upsertOneImage', {
  type: nonNull('Image'),
  args: {
    where: nonNull('ImageWhereUniqueInput'),
    create: nonNull('ImageCreateInput'),
    update: nonNull('ImageUpdateInput'),
  },
  resolve(_parent, args, { db, select }) {
    return db.image.upsert({
      ...args,
      ...select,
    })
  },
})
