import gql from 'graphql-tag'

export const AllTeamsQuery = gql`
  query AllTeams {
    findManyTeam {
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
