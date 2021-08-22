import { mutationField, nonNull } from 'nexus'

export const VerificationRequestDeleteOneMutation = mutationField(
  'deleteOneVerificationRequest',
  {
    type: 'VerificationRequest',
    args: {
      where: nonNull('VerificationRequestWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { db, select }) => {
      return db.verificationRequest.delete({
        where,
        ...select,
      })
    },
  },
)
