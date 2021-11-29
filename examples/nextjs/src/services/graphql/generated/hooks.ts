import * as Types from 'src/services/graphql/generated/codegen'

import { GraphQLClient } from 'graphql-request'
import { RequestInit } from 'graphql-request/dist/types.dom'
import { useQuery, UseQueryOptions } from 'react-query'

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit['headers'],
) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers)
}
export const CoachInfoFragmentDoc = `
    fragment CoachInfo on Coach {
  id
  name
  type
}
    `
export const PlayerInfoFragmentDoc = `
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
export const TeamInfoFragmentDoc = `
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
export const AllTeamsDocument = `
    query AllTeams {
  teams(orderBy: {city: asc}) {
    ...TeamInfo
  }
}
    ${TeamInfoFragmentDoc}`
export const useAllTeamsQuery = <TData = Types.AllTeamsQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: Types.AllTeamsQueryVariables,
  options?: UseQueryOptions<Types.AllTeamsQuery, TError, TData>,
  headers?: RequestInit['headers'],
) =>
  useQuery<Types.AllTeamsQuery, TError, TData>(
    variables === undefined ? ['AllTeams'] : ['AllTeams', variables],
    fetcher<Types.AllTeamsQuery, Types.AllTeamsQueryVariables>(
      client,
      AllTeamsDocument,
      variables,
      headers,
    ),
    options,
  )
export const AllUsersDocument = `
    query AllUsers {
  users {
    id
    name
    image
  }
}
    `
export const useAllUsersQuery = <TData = Types.AllUsersQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: Types.AllUsersQueryVariables,
  options?: UseQueryOptions<Types.AllUsersQuery, TError, TData>,
  headers?: RequestInit['headers'],
) =>
  useQuery<Types.AllUsersQuery, TError, TData>(
    variables === undefined ? ['AllUsers'] : ['AllUsers', variables],
    fetcher<Types.AllUsersQuery, Types.AllUsersQueryVariables>(
      client,
      AllUsersDocument,
      variables,
      headers,
    ),
    options,
  )
export const TeamDocument = `
    query Team($id: String!) {
  team(where: {id: $id}) {
    ...TeamInfo
    players {
      ...PlayerInfo
    }
    coaches {
      ...CoachInfo
    }
  }
}
    ${TeamInfoFragmentDoc}
${PlayerInfoFragmentDoc}
${CoachInfoFragmentDoc}`
export const useTeamQuery = <TData = Types.TeamQuery, TError = unknown>(
  client: GraphQLClient,
  variables: Types.TeamQueryVariables,
  options?: UseQueryOptions<Types.TeamQuery, TError, TData>,
  headers?: RequestInit['headers'],
) =>
  useQuery<Types.TeamQuery, TError, TData>(
    ['Team', variables],
    fetcher<Types.TeamQuery, Types.TeamQueryVariables>(client, TeamDocument, variables, headers),
    options,
  )
