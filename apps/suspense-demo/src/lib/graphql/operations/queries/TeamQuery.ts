import gql from 'graphql-tag'

export const TeamQuery = gql`
  query Team($id: String!) {
    team(id: $id) {
      id
      city
      name
      division
      conference
      wins
      losses
      colorScheme {
        primary
        secondary
      }
      logo {
        id
      }
      players {
        id
        name
        position
        number
        height
        weight
        image {
          id
        }
      }
      coaches {
        id
        name
        type
      }
    }
  }
`
