import { queryField, nonNull } from 'nexus'

export const VerificationRequestFindUniqueQuery = queryField(
  'findUniqueVerificationRequest',
  {
    type: 'VerificationRequest',
    args: {
      where: nonNull('VerificationRequestWhereUniqueInput'),
    },
    resolve(_parent, { where }, { db, select }) {
      return db.verificationRequest.findUnique({
        where,
        ...select,
      })
    },
  },
)
