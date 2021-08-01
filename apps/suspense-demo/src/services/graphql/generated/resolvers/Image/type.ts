import { objectType } from 'nexus'

export const Image = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Image',
  description: `Image for NBA team, player, or coach`,
  definition(t) {
    t.string('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.string('url')
    t.field('type', { type: 'ImageType' })
    t.nullable.field('player', {
      type: 'Player',
      resolve(root: any) {
        return root.player
      },
    })
    t.nullable.field('coach', {
      type: 'Coach',
      resolve(root: any) {
        return root.coach
      },
    })
    t.nullable.field('team', {
      type: 'Team',
      resolve(root: any) {
        return root.team
      },
    })
  },
})
