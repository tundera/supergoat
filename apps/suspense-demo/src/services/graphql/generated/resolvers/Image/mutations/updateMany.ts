import { mutationField, nonNull } from 'nexus'

export const ImageUpdateManyMutation = mutationField('updateManyImage', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ImageWhereInput',
    data: nonNull('ImageUpdateManyMutationInput'),
  },
  resolve(_parent, args, { db }) {
    return db.image.updateMany(args as any)
  },
})
