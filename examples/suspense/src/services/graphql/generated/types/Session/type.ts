import { objectType } from 'nexus'

export const Session = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Session',
  definition(t) {
    t.string('id')
    t.string('userId')
    t.field('expires', { type: 'DateTime' })
    t.string('sessionToken')
    t.string('accessToken')
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
