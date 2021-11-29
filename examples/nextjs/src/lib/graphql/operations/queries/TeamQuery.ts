import { gql } from 'graphql-request'

import { TeamInfo } from 'src/lib/graphql/fragments/TeamInfo'
import { PlayerInfo } from 'src/lib/graphql/fragments/PlayerInfo'
import { CoachInfo } from 'src/lib/graphql/fragments/CoachInfo'

export const TeamQuery = gql`
  query Team($id: String!) {
    team(where: { id: $id }) {
      ...TeamInfo
      players {
        ...PlayerInfo
      }
      coaches {
        ...CoachInfo
      }
    }
  }

  ${TeamInfo}

  ${PlayerInfo}

  ${CoachInfo}
`
