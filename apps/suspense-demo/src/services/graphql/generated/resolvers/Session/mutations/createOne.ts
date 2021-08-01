import { mutationField, nonNull } from 'nexus'

export const SessionCreateOneMutation = mutationField('createOneSession', {
  type: nonNull('Session'),
  args: {
    data: nonNull('SessionCreateInput'),
  },
  resolve(_parent, { data }, { db, select }) {
    return db.session.create({
      data,
      ...select,
    })
  },
})
