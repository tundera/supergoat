import { ColorScheme } from 'nexus-prisma'
import { extendType, list, objectType, stringArg } from 'nexus'

/**
 * ColorScheme Object Type
 */
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

/**
 * ColorScheme Query Types
 */
export const ColorSchemeQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('colorScheme', {
      type: 'ColorScheme',
      args: {
        id: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.colorScheme.findUnique({
          where: { id: args?.id ?? undefined },
        })
      },
    })
    t.field('colorSchemes', {
      type: list('ColorScheme'),
      resolve(_parent, _args, ctx) {
        return ctx.db.colorScheme.findMany({})
      },
    })
    t.field('colorSchemeByTeam', {
      type: 'ColorScheme',
      args: {
        id: stringArg(),
      },
      resolve: (_parent, args, ctx) => {
        return ctx.db.colorScheme.findUnique({
          where: { id: args.id ?? undefined },
        })
      },
    })
  },
})
