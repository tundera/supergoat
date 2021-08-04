import { GraphQLScalarType } from 'graphql'
import { JSONObjectResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

import { GraphQLDateTime } from 'graphql-iso-date'
import { GraphQLUpload } from 'graphql-upload'

const jsonScalar = new GraphQLScalarType({
  ...JSONObjectResolver,
  name: 'Json',
})

export const JSON = asNexusMethod(jsonScalar, 'json')
export const DateTime = asNexusMethod(GraphQLDateTime, 'date')
export const Upload = asNexusMethod(GraphQLUpload, 'upload')
