import { objectType } from 'nexus'

export const Team = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Team',
  description: `Team model`,
  definition(t) {
    t.string('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.string('handle')
    t.string('name')
    t.string('slug')
    t.string('city')
    t.string('abbreviation')
    t.nullable.int('wins')
    t.nullable.int('losses')
    t.nullable.float('winPercentage')
    t.string('conference')
    t.string('division')
    t.string('established')
    t.list.field('coaches', {
      type: 'Coach',
      args: {
        where: 'CoachWhereInput',
        orderBy: 'CoachOrderByInput',
        cursor: 'CoachWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CoachScalarFieldEnum',
      },
      resolve(root: any) {
        return root.coaches
      },
    })
    t.list.field('players', {
      type: 'Player',
      args: {
        where: 'PlayerWhereInput',
        orderBy: 'PlayerOrderByInput',
        cursor: 'PlayerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PlayerScalarFieldEnum',
      },
      resolve(root: any) {
        return root.players
      },
    })
    t.nullable.string('colorSchemeId')
    t.nullable.field('colorScheme', {
      type: 'ColorScheme',
      resolve(root: any) {
        return root.colorScheme
      },
    })
    t.nullable.string('logoId')
    t.nullable.field('logo', {
      type: 'Image',
      resolve(root: any) {
        return root.logo
      },
    })
  },
})
