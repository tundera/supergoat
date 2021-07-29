import { User } from 'nexus-prisma'
import { objectType, extendType, intArg, stringArg, inputObjectType, list } from 'nexus'

export const UserType = objectType({
  name: User.$name,
  definition(t) {
    t.field(User.id.name, User.id)
    t.field(User.name.name, User.name)
    t.field(User.email.name, User.email)
    t.field(User.image.name, User.image)
    t.field(User.apple.name, User.apple)
    t.field(User.facebook.name, User.facebook)
    t.field(User.github.name, User.github)
    t.field(User.google.name, User.google)
    t.field(User.twitter.name, User.twitter)
    t.field(User.createdAt.name, User.createdAt)
    t.field(User.updatedAt.name, User.updatedAt)
    t.field(User.accounts.name, User.accounts)
    t.field(User.sessions.name, User.sessions)
  },
})

export const UserQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: 'User',
      args: {
        id: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.user.findUnique({
          where: { id: args?.id ?? undefined },
        })
      },
    })
    t.field('users', {
      type: list('User'),
      resolve(_parent, _args, ctx) {
        return ctx.db.user.findMany()
      },
    })
  },
})

export const UserOrderByInput = inputObjectType({
  name: 'UserOrderByInput',
  definition(t) {
    t.nonNull.field('name', {
      type: 'SortOrder',
    })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id')
  },
})
