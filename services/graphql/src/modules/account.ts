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
    t.crud.account()
    t.crud.accounts({ filtering: true, ordering: true })
  },
})

export const AccountMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAccount()
    t.crud.updateOneAccount()
  },
})
