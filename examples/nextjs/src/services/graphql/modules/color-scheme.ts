import { ColorScheme } from 'nexus-prisma'
import { extendType, objectType } from 'nexus'

export const ColorSchemeType = objectType({
  name: ColorScheme.$name,
  description: ColorScheme.$description,
  definition(t) {
    t.field(ColorScheme.id.name, ColorScheme.id)
    t.field(ColorScheme.createdAt.name, ColorScheme.createdAt)
    t.field(ColorScheme.updatedAt.name, ColorScheme.updatedAt)
    t.field(ColorScheme.primary.name, ColorScheme.primary)
    t.field(ColorScheme.secondary.name, ColorScheme.secondary)
    t.field(ColorScheme.team.name, ColorScheme.team)
  },
})

export const ColorSchemeQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.colorScheme()
    t.crud.colorSchemes({ filtering: true, ordering: true })
  },
})

export const ColorSchemeMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneColorScheme()
    t.crud.updateOneColorScheme()
  },
})
