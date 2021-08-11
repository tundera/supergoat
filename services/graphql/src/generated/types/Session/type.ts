import { objectType } from 'nexus'

export const Session = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Session',
  definition(t) {
    t.int('id')
    t.int('userId')
    t.field('expires', { type: 'DateTime' })
    t.string('sessionToken')
    t.string('accessToken')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
