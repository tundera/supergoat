import { mutationField, nonNull } from 'nexus'

export const VerificationRequestCreateOneMutation = mutationField('createOneVerificationRequest', {
  type: nonNull('VerificationRequest'),
  args: {
    data: nonNull('VerificationRequestCreateInput'),
  },
  resolve(_parent, { data }, { db, select }) {
    return db.verificationRequest.create({
      data,
      ...select,
    })
  },
})
