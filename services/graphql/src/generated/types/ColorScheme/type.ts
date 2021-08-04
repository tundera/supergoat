import { objectType } from 'nexus'

export const ColorScheme = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ColorScheme',
  description: `Color scheme model`,
  definition(t) {
    t.string('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.string('primary')
    t.string('secondary')
    t.nullable.field('team', {
      type: 'Team',
      resolve(root: any) {
        return root.team
      },
    })
  },
})
