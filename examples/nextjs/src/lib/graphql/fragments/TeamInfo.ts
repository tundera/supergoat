import { gql } from 'graphql-request'

export const TeamInfo = gql`
  fragment TeamInfo on Team {
    id
    city
    name
    slug
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
  }
`
