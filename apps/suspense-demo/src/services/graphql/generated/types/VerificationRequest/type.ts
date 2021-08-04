import { objectType } from 'nexus'

export const VerificationRequest = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'VerificationRequest',
  definition(t) {
    t.string('id')
    t.string('identifier')
    t.string('token')
    t.field('expires', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
