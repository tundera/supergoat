import { objectType } from 'nexus'

export const Coach = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Coach',
  description: `Coach model`,
  definition(t) {
    t.string('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.string('handle')
    t.string('name')
    t.nullable.string('type')
    t.nullable.string('isAssistant')
    t.nullable.string('teamId')
    t.nullable.field('team', {
      type: 'Team',
      resolve(root: any) {
        return root.team
      },
    })
    t.nullable.string('imageId')
    t.nullable.field('image', {
      type: 'Image',
      resolve(root: any) {
        return root.image
      },
    })
  },
})
