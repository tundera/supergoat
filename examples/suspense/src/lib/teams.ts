import { QueryClient } from 'react-query'
import { request, GraphQLClient } from 'graphql-request'

import {
  TeamQuery,
  TeamQueryVariables,
  AllTeamsQuery,
  AllTeamsQueryVariables,
} from 'src/services/graphql/generated/codegen'
import { TeamDocument, AllTeamsDocument } from 'src/services/graphql/generated/hooks'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_API as string

export const getAllTeamsQuery = async () => {
  const teams = await request<AllTeamsQuery>(endpoint, AllTeamsDocument)
  return teams
}

export const getTeamQuery = async (id: string) => {
  if (!id) console.log('NO ID in `getTeamQuery`')

  return request<TeamQuery, TeamQueryVariables>(endpoint, TeamDocument, { id })
}

export const prefetchTeamQuery = async (
  queryClient: QueryClient,
  variables: TeamQueryVariables,
  requestHeaders?: RequestInit['headers'],
) => {
  const { id } = variables

  if (!id) console.log('NO ID in `prefetchTeamQuery`')

  const graphQLClient = new GraphQLClient(endpoint)

  try {
    await queryClient.prefetchQuery<TeamQuery, string>(['Team', { id }], () =>
      graphQLClient.request<TeamQuery, TeamQueryVariables>(
        TeamDocument,
        {
          id,
        },
        requestHeaders,
      ),
    )
  } catch (err) {
    console.log(err)
  }
}

export const prefetchAllTeamsQuery = async (
  queryClient: QueryClient,
  requestHeaders?: RequestInit['headers'],
) => {
  const graphQLClient = new GraphQLClient(endpoint)

  try {
    await queryClient.prefetchQuery<AllTeamsQuery, string>(['AllTeams', null], () =>
      graphQLClient.request<AllTeamsQuery, AllTeamsQueryVariables>(
        AllTeamsDocument,
        undefined,
        requestHeaders,
      ),
    )
  } catch (err) {
    console.log(err)
  }
}

export const fetchAllTeamsQuery = async (
  queryClient: QueryClient,
  requestHeaders?: RequestInit['headers'],
) => {
  const graphQLClient = new GraphQLClient(endpoint)

  const data = await queryClient.fetchQuery<AllTeamsQuery, string>(['AllTeams', null], () =>
    graphQLClient.request<AllTeamsQuery, AllTeamsQueryVariables>(
      AllTeamsDocument,
      undefined,
      requestHeaders,
    ),
  )

  return data
}
