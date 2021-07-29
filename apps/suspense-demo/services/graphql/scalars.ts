import { GraphQLUpload } from 'graphql-upload'
import { asNexusMethod } from 'nexus'

export { DateTime, Json, Bytes } from 'nexus-prisma/scalars'

export const Upload = asNexusMethod(GraphQLUpload, 'upload')
