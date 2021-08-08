import { objectType } from 'nexus'

export const Player = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Player',
  description: `Player model`,
  definition(t) {
    t.string('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.string('handle')
    t.string('name')
    t.string('slug')
    t.string('height')
    t.string('weight')
    t.nullable.string('number')
    t.nullable.string('position')
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
