import { mutationField, nonNull } from 'nexus'

export const VerificationRequestUpsertOneMutation = mutationField(
  'upsertOneVerificationRequest',
  {
    type: nonNull('VerificationRequest'),
    args: {
      where: nonNull('VerificationRequestWhereUniqueInput'),
      create: nonNull('VerificationRequestCreateInput'),
      update: nonNull('VerificationRequestUpdateInput'),
    },
    resolve(_parent, args, { db, select }) {
      return db.verificationRequest.upsert({
        ...args,
        ...select,
      })
    },
  },
)
