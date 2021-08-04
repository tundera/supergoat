import { objectType } from 'nexus'

export const Account = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Account',
  definition(t) {
    t.string('id')
    t.string('userId')
    t.string('providerType')
    t.string('providerId')
    t.string('providerAccountId')
    t.nullable.string('refreshToken')
    t.nullable.string('accessToken')
    t.nullable.field('accessTokenExpires', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
  },
})
