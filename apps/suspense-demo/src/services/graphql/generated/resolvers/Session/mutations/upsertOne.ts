import { mutationField, nonNull } from 'nexus'

export const SessionUpsertOneMutation = mutationField('upsertOneSession', {
  type: nonNull('Session'),
  args: {
    where: nonNull('SessionWhereUniqueInput'),
    create: nonNull('SessionCreateInput'),
    update: nonNull('SessionUpdateInput'),
  },
  resolve(_parent, args, { db, select }) {
    return db.session.upsert({
      ...args,
      ...select,
    })
  },
})
