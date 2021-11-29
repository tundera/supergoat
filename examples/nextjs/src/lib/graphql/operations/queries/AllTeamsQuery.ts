import { gql } from 'graphql-request'

import { TeamInfo } from 'src/lib/graphql/fragments/TeamInfo'

export const AllTeamsQuery = gql`
  query AllTeams {
    teams(orderBy: { city: asc }) {
      ...TeamInfo
    }

    ${TeamInfo}
  }
`
