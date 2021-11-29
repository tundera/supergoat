import { gql } from 'graphql-request'

export const CoachInfo = gql`
  fragment CoachInfo on Coach {
    id
    name
    type
  }
`
