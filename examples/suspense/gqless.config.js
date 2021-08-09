/**
 * @type {import('@gqless/cli').GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: process.env.NEXT_PUBLIC_GRAPHQL_API,
    headers: {},
  },
  destination: 'src/gqless/index.ts',
  subscriptions: false,
}

export default config
