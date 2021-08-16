import type { NextApiRequest, NextApiResponse } from 'next'

import nc from 'next-connect'
import { getSession } from 'next-auth/client'

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    const { user } = session
    res.json({ user })
  } else {
    res.statusCode = 403
    res.end('You are not logged in. Please log in to see your user info.')
  }
})

export default handler
