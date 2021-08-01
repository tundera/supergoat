import { Coach } from 'nexus-prisma'
import { extendType, inputObjectType, list, objectType, stringArg } from 'nexus'

/**
 * Coach Object Type
 */
export const CoachType = objectType({
  name: Coach.$name,
  description: Coach.$description,
  definition(t) {
    t.field(Coach.id.name, Coach.id)
    t.field(Coach.createdAt.name, Coach.createdAt)
    t.field(Coach.updatedAt.name, Coach.updatedAt)
    t.field(Coach.handle.name, Coach.handle)
    t.field(Coach.imageId.name, Coach.imageId)
    t.field(Coach.name.name, Coach.name)
    t.field(Coach.teamId.name, Coach.teamId)
    t.field(Coach.type.name, Coach.type)
    t.field(Coach.isAssistant.name, Coach.isAssistant)
    t.field(Coach.team.name, Coach.team)
    t.field(Coach.image.name, Coach.image)
  },
})

/**
 * Coach Query Types
 */
export const CoachQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('coach', {
      type: 'Coach',
      args: {
        id: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.coach.findUnique({
          where: { id: args?.id ?? undefined },
        })
      },
    })
    t.field('allCoaches', {
      type: list('Coach'),
      resolve(_parent, _args, ctx) {
        return ctx.db.coach.findMany({})
      },
    })
  },
})

/**
 * Coach Input Types
 */
export const CoachOrderByInput = inputObjectType({
  name: 'CoachOrderByInput',
  definition(t) {
    t.nonNull.field('name', {
      type: 'SortOrder',
    })
  },
})

export const CoachWhereUniqueInput = inputObjectType({
  name: 'CoachWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id')
  },
})

export const CoachWhereInput = inputObjectType({
  name: 'CoachWhereInput',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.field('name', { type: 'StringFilter' })
  },
})
