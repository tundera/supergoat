import { shield, allow } from 'graphql-shield'

// import { isAuthenticated } from 'src/services/graphql/permissions/rules/isAuthenticated'

export const permissions = shield({
  Query: {
    '*': allow,
    // Session: isAuthenticated,
    // Sessions: isAuthenticated,
    // Account: isAuthenticated,
    // Accounts: isAuthenticated,
    // User: isAuthenticated,
    // Users: isAuthenticated,
  },
  // Mutation: {
  //   '*': isAuthenticated,
  // },
})
