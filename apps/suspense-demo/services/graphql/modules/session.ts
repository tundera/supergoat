import { Session } from 'nexus-prisma'
import { objectType, extendType, intArg, stringArg, inputObjectType, list } from 'nexus'

export const SessionType = objectType({
  name: Session.$name,
  definition(t) {
    t.field(Session.id.name, Session.id)
    t.field(Session.userId.name, Session.userId)
    t.field(Session.expires.name, Session.expires)
    t.field(Session.sessionToken.name, Session.sessionToken)
    t.field(Session.accessToken.name, Session.accessToken)
    t.field(Session.createdAt.name, Session.createdAt)
    t.field(Session.updatedAt.name, Session.updatedAt)
    t.field(Session.user.name, Session.user)
  },
})

export const SessionQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('session', {
      type: 'Session',
      args: {
        id: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.session.findUnique({
          where: { id: args?.id ?? undefined },
        })
      },
    })
    t.field('sessions', {
      type: list('Session'),
      resolve(_parent, _args, ctx) {
        return ctx.db.session.findMany()
      },
    })
  },
})

export const SessionOrderByInput = inputObjectType({
  name: 'SessionOrderByInput',
  definition(t) {
    t.nonNull.field('name', {
      type: 'SortOrder',
    })
  },
})

export const SessionWhereUniqueInput = inputObjectType({
  name: 'SessionWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id')
  },
})
