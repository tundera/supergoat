import { GraphQLUpload } from 'graphql-upload'
import { asNexusMethod } from 'nexus'

export * from 'nexus-prisma/scalars'

export const Upload = asNexusMethod(GraphQLUpload, 'upload')
