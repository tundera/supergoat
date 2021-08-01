import { Account } from 'nexus-prisma'
import { objectType, queryType, extendType, intArg, stringArg, inputObjectType, list } from 'nexus'

export const AccountType = objectType({
  name: Account.$name,
  definition(t) {
    t.field(Account.id.name, Account.id)
    t.field(Account.userId.name, Account.userId)
    t.field(Account.providerType.name, Account.providerType)
    t.field(Account.providerId.name, Account.providerId)
    t.field(Account.providerAccountId.name, Account.providerAccountId)
    t.field(Account.refreshToken.name, Account.refreshToken)
    t.field(Account.accessToken.name, Account.accessToken)
    t.field(Account.accessTokenExpires.name, Account.accessTokenExpires)
    t.field(Account.createdAt.name, Account.createdAt)
    t.field(Account.updatedAt.name, Account.updatedAt)
    t.field(Account.user.name, Account.user)
  },
})

export const AccountQueries = queryType({
  definition(t) {
    t.field('account', {
      type: 'Account',
      args: {
        id: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.account.findUnique({
          where: { id: args?.id ?? undefined },
        })
      },
    })
    t.field('accounts', {
      type: list('Account'),
      resolve(_parent, _args, ctx) {
        return ctx.db.account.findMany()
      },
    })
  },
})

export const AccountOrderByInput = inputObjectType({
  name: 'AccuontOrderByInput',
  definition(t) {
    t.nonNull.field('name', {
      type: 'SortOrder',
    })
  },
})

export const AccountWhereUniqueInput = inputObjectType({
  name: 'AccountWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id')
  },
})
