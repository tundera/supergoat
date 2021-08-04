import { mutationField, nonNull } from 'nexus'

export const TeamUpsertOneMutation = mutationField('upsertOneTeam', {
  type: nonNull('Team'),
  args: {
    where: nonNull('TeamWhereUniqueInput'),
    create: nonNull('TeamCreateInput'),
    update: nonNull('TeamUpdateInput'),
  },
  resolve(_parent, args, { db, select }) {
    return db.team.upsert({
      ...args,
      ...select,
    })
  },
})
