import gql from 'graphql-tag'

export const AllTeamsQuery = gql`
  query AllTeams {
    allTeams {
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
