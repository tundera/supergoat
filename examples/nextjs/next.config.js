const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@supergoat/components', '@supergoat/theme'], {
  debug: process.env.NODE_ENV === 'development',
})

const { createSecureHeaders } = require('next-secure-headers')

const isProd = process.env.NODE_ENV === 'production'

const secureHeaders = createSecureHeaders({
  contentSecurityPolicy: {
    directives: {
      //defaultSrc: "'self'",
      //styleSrc: ["'self'"],
    },
  },
  ...(isProd
    ? {
        forceHTTPSRedirect: [true, { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true }],
      }
    : {}),
  referrerPolicy: 'same-origin',
})

/** @type {import('next/types').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
    swcLoader: true,
    swcMinify: false,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    disableStaticImages: false,
    loader: 'default',
    domains: [
      'source.unsplash.com',
      'res.cloudinary.com',
      'pbs.twimg.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
    ],
  },

  async headers() {
    return [{ source: '/(.*)', headers: secureHeaders }]
  },

  webpack: (config, _options) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}

const plugins = [withTM]

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  })
  plugins.push(withBundleAnalyzer)
}

const config = withPlugins([...plugins], nextConfig)

module.exports = config
