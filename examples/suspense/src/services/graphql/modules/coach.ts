import { Coach } from 'nexus-prisma'
import { extendType, inputObjectType, list, objectType, stringArg } from 'nexus'

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
    t.crud.coach()
    t.crud.coaches({ filtering: true, ordering: true })
  },
})
