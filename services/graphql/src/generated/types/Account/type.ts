import { objectType } from 'nexus'

export const Account = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Account',
  definition(t) {
    t.int('id')
    t.string('compoundId')
    t.int('userId')
    t.string('providerType')
    t.string('providerId')
    t.string('providerAccountId')
    t.nullable.string('refreshToken')
    t.nullable.string('accessToken')
    t.nullable.field('accessTokenExpires', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
