import { queryField, list } from 'nexus'

export const VerificationRequestAggregateQuery = queryField('aggregateVerificationRequest', {
  type: 'AggregateVerificationRequest',
  args: {
    where: 'VerificationRequestWhereInput',
    orderBy: list('VerificationRequestOrderByInput'),
    cursor: 'VerificationRequestWhereUniqueInput',
    distinct: 'VerificationRequestScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { db, select }) {
    return db.verificationRequest.aggregate({ ...args, ...select }) as any
  },
})
