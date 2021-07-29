import { Team } from 'nexus-prisma'
import { extendType, inputObjectType, list, objectType, stringArg } from 'nexus'

/**
 * Team Object Type
 */
export const TeamType = objectType({
  name: Team.$name,
  description: Team.$description,
  definition(t) {
    t.field(Team.id.name, Team.id)
    t.field(Team.createdAt.name, Team.createdAt)
    t.field(Team.updatedAt.name, Team.updatedAt)
    t.field(Team.handle.name, Team.handle)
    t.field(Team.name.name, Team.name)
    t.field(Team.slug.name, Team.slug)
    t.field(Team.city.name, Team.city)
    t.field(Team.abbreviation.name, Team.abbreviation)
    t.field(Team.wins.name, Team.wins)
    t.field(Team.losses.name, Team.losses)
    t.field(Team.winPercentage.name, Team.winPercentage)
    t.field(Team.conference.name, Team.conference)
    t.field(Team.division.name, Team.division)
    t.field(Team.established.name, Team.established)
    t.field(Team.coaches.name, Team.coaches)
    t.field(Team.players.name, Team.players)
    t.field(Team.colorScheme.name, Team.colorScheme)
    t.field(Team.logo.name, Team.logo)
  },
})

/**
 * Team Query Types
 */
export const TeamQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('team', {
      type: 'Team',
      args: {
        id: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.team.findUnique({
          where: { id: args?.id ?? undefined },
        })
      },
    })
    t.field('allTeams', {
      type: list('Team'),
      resolve(_parent, _args, ctx) {
        return ctx.db.team.findMany({})
      },
    })
  },
})

/**
 * Team Input Types
 */
export const TeamOrderByInput = inputObjectType({
  name: 'TeamOrderByInput',
  definition(t) {
    t.nonNull.field('name', {
      type: 'SortOrder',
    })
  },
})

export const TeamWhereUniqueInput = inputObjectType({
  name: 'TeamWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id')
  },
})

export const TeamWhereInput = inputObjectType({
  name: 'TeamWhereInput',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.field('name', { type: 'StringFilter' })
  },
})
