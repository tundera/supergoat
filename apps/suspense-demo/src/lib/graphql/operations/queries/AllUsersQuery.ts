import gql from 'graphql-tag'

export const AllUsersQuery = gql`
  query AllUsers {
    findManyUser {
      id
      name
      image
    }
  }
`
