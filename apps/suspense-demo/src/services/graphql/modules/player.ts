import { Player } from 'nexus-prisma'
import { extendType, inputObjectType, list, objectType, stringArg } from 'nexus'

/**
 * Player Object Type
 */
export const PlayerType = objectType({
  name: Player.$name,
  description: Player.$description,
  definition(t) {
    t.field(Player.id.name, Player.id)
    t.field(Player.createdAt.name, Player.createdAt)
    t.field(Player.updatedAt.name, Player.updatedAt)
    t.field(Player.handle.name, Player.handle)
    t.field(Player.name.name, Player.name)
    t.field(Player.slug.name, Player.slug)
    t.field(Player.imageId.name, Player.imageId)
    t.field(Player.teamId.name, Player.teamId)
    t.field(Player.height.name, Player.height)
    t.field(Player.weight.name, Player.weight)
    t.field(Player.number.name, Player.number)
    t.field(Player.position.name, Player.position)
    t.field(Player.team.name, Player.team)
    t.field(Player.image.name, Player.image)
  },
})

/**
 * Player Query Types
 */
export const PlayerQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('player', {
      type: 'Player',
      args: {
        id: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.player.findUnique({
          where: { id: args?.id ?? undefined },
        })
      },
    })
    t.field('allPlayers', {
      type: list('Player'),
      resolve(_parent, _args, ctx) {
        return ctx.db.player.findMany({})
      },
    })
  },
})

/**
 * Player Input Types
 */
export const PlayerOrderByInput = inputObjectType({
  name: 'PlayerOrderByInput',
  definition(t) {
    t.nonNull.field('name', {
      type: 'SortOrder',
    })
  },
})

export const PlayerWhereUniqueInput = inputObjectType({
  name: 'PlayerWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id')
  },
})

export const PlayerWhereInput = inputObjectType({
  name: 'PlayerWhereInput',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.field('name', { type: 'StringFilter' })
  },
})
