import { gql } from 'graphql-request'

export const PlayerInfo = gql`
  fragment PlayerInfo on Player {
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
`
