import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_API as string

export const client = new GraphQLClient(endpoint)
