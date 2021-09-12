import { Session } from 'nexus-prisma'
import { objectType, extendType } from 'nexus'

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
    t.crud.session()
    t.crud.sessions({ filtering: true, ordering: true })
  },
})
