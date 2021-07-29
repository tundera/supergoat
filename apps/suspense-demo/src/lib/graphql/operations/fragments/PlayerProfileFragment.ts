import gql from 'graphql-tag'

const PlayerProfileFragment = gql`
  fragment PlayerProfile on Player {
    id
    name
    height
    weight
    position
    number
  }
`

export default PlayerProfileFragment
