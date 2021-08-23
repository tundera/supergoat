import { Team } from 'nexus-prisma'
import { extendType, inputObjectType, list, objectType, stringArg } from 'nexus'

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

export const TeamQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.team()
    t.crud.teams({ filtering: true, ordering: true })
  },
})

export const TeamMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneTeam()
    t.crud.updateOneTeam()
  },
})
