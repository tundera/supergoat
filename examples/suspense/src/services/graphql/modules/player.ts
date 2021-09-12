import { Player } from 'nexus-prisma'
import { extendType, objectType } from 'nexus'

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

export const PlayerQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.player()
    t.crud.players({ filtering: true, ordering: true })
  },
})
