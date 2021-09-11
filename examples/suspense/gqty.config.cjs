/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: process.env.NEXT_PUBLIC_GRAPHQL_API,
    headers: {},
  },
  destination: './src/lib/graphql/gqty/index.ts',
}

module.exports = config
