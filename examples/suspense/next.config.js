const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')
const withMDX = require('@next/mdx')
const withBundleAnalyzer = require('@next/bundle-analyzer')

/**
 *  Next.js configuration object
 *  @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'pbs.twimg.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
    ],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}

const plugins = [
  withTM(['@monorepo/components', '@monorepo/theme']),
  withMDX({
    extension: /\.mdx?$/,
  }),
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  }),
]

module.exports = withPlugins([...plugins], nextConfig)
