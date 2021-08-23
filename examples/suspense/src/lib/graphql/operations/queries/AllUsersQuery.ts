import gql from 'graphql-tag'

export const AllUsersQuery = gql`
  query AllUsers {
    users {
      id
      name
      image
    }
  }
`
