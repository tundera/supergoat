import { gql } from 'graphql-request'

export const AllUsersQuery = gql`
  query AllUsers {
    users {
      id
      name
      image
    }
  }
`
