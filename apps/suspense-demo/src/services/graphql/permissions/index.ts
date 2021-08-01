import { shield, allow } from 'graphql-shield'

import { isAuthenticated } from 'services/graphql/permissions/rules/isAuthenticated'

export const permissions = shield({
  Query: {
    '*': allow,
    session: isAuthenticated,
    sessions: isAuthenticated,
    account: isAuthenticated,
    accounts: isAuthenticated,
    user: isAuthenticated,
    users: isAuthenticated,
  },
  // Mutation: {
  //   '*': isAuthenticated,
  // },
})
