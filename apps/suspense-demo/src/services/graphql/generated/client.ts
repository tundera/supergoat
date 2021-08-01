import * as Types from 'src/services/graphql/generated/types';

import { GraphQLClient } from 'graphql-request';
import { useQuery, UseQueryOptions } from 'react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables);
}
export const PlayerProfileFragmentDoc = `
    fragment PlayerProfile on Player {
  id
  name
  height
  weight
  position
  number
}
    `;
export const AllTeamsDocument = `
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
    `;
export const useAllTeamsQuery = <
      TData = Types.AllTeamsQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: Types.AllTeamsQueryVariables, 
      options?: UseQueryOptions<Types.AllTeamsQuery, TError, TData>
    ) => 
    useQuery<Types.AllTeamsQuery, TError, TData>(
      ['AllTeams', variables],
      fetcher<Types.AllTeamsQuery, Types.AllTeamsQueryVariables>(client, AllTeamsDocument, variables),
      options
    );
export const AllUsersDocument = `
    query AllUsers {
  users {
    id
    name
    image
  }
}
    `;
export const useAllUsersQuery = <
      TData = Types.AllUsersQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: Types.AllUsersQueryVariables, 
      options?: UseQueryOptions<Types.AllUsersQuery, TError, TData>
    ) => 
    useQuery<Types.AllUsersQuery, TError, TData>(
      ['AllUsers', variables],
      fetcher<Types.AllUsersQuery, Types.AllUsersQueryVariables>(client, AllUsersDocument, variables),
      options
    );
export const TeamDocument = `
    query Team($id: String!) {
  team(id: $id) {
    id
    city
    name
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
    players {
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
    coaches {
      id
      name
      type
    }
  }
}
    `;
export const useTeamQuery = <
      TData = Types.TeamQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: Types.TeamQueryVariables, 
      options?: UseQueryOptions<Types.TeamQuery, TError, TData>
    ) => 
    useQuery<Types.TeamQuery, TError, TData>(
      ['Team', variables],
      fetcher<Types.TeamQuery, Types.TeamQueryVariables>(client, TeamDocument, variables),
      options
    );