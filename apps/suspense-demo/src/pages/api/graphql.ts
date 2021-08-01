import type { Request } from 'graphql-helix'
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  shouldRenderGraphiQL,
} from 'graphql-helix'
import { NextApiRequest, NextApiResponse } from 'next/types'

import nc from 'next-connect'

import { schema } from 'src/services/graphql/schema'
import { createContext, NexusContext } from 'src/services/graphql/context'

import { $settings } from 'nexus-prisma'

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((req, res) => {
    const request = {
      body: req.body,
      headers: req.headers,
      method: req.method,
      query: req.query,
    } as Request

    if (shouldRenderGraphiQL(request)) {
      res.send(renderGraphiQL({ endpoint: '/api/graphql' }))
    }
  })
  .post(async (req, res) => {
    const request = {
      body: req.body,
      headers: req.headers,
      method: req.method,
      query: req.query,
    } as Request

    const { operationName, query, variables } = getGraphQLParameters(request)

    const result = await processRequest<NexusContext>({
      operationName,
      query,
      variables,
      request,
      schema,
      contextFactory: () => createContext({ req, res }),
    })

    if (result.type === 'RESPONSE') {
      result.headers.forEach(({ name, value }) => res.setHeader(name, value))
      res.status(result.status)
      res.json(result.payload)
    } else if (result.type === 'MULTIPART_RESPONSE') {
      res.writeHead(200, {
        Connection: 'keep-alive',
        'Content-Type': 'multipart/mixed; boundary="-"',
        'Transfer-Encoding': 'chunked',
      })

      req.on('close', () => {
        result.unsubscribe()
      })

      res.write('---')

      await result.subscribe((result) => {
        const chunk = Buffer.from(JSON.stringify(result), 'utf8')
        const data = [
          '',
          'Content-Type: application/json; charset=utf-8',
          'Content-Length: ' + String(chunk.length),
          '',
          chunk,
        ]

        if (result.hasNext) {
          data.push('---')
        }

        res.write(data.join('\r\n'))
      })

      res.write('\r\n-----\r\n')
      res.end()
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache',
      })

      req.on('close', () => {
        result.unsubscribe()
      })

      await result.subscribe((result) => {
        res.write(`data: ${JSON.stringify(result)}\n\n`)
      })
    }
  })

$settings({
  prismaClientContextField: 'db',
})

export default handler
