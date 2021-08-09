import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.nullable.string('name')
    t.nullable.string('email')
    t.nullable.field('emailVerified', { type: 'DateTime' })
    t.nullable.string('image')
    t.nullable.string('apple')
    t.nullable.string('facebook')
    t.nullable.string('github')
    t.nullable.string('google')
    t.nullable.string('twitter')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
