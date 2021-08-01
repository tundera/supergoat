import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.string('id')
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
    t.list.field('accounts', {
      type: 'Account',
      args: {
        where: 'AccountWhereInput',
        orderBy: 'AccountOrderByInput',
        cursor: 'AccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.accounts
      },
    })
    t.list.field('sessions', {
      type: 'Session',
      args: {
        where: 'SessionWhereInput',
        orderBy: 'SessionOrderByInput',
        cursor: 'SessionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SessionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.sessions
      },
    })
  },
})
