import { gql } from 'graphql-request'

export const AllTeamsQuery = gql`
  query AllTeams {
    teams {
      id
      city
      name
      slug
      wins
      losses
      logo {
        id
      }
    }
  }
`
