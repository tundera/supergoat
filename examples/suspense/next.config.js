const path = require('path')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@monorepo/components', '@monorepo/theme'], {
  debug: process.env.NODE_ENV === 'development',
})
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

// const packageManifest = require('./package.json')
// const { i18n } = require('./next-i18next.config')

const isProd = process.env.NODE_ENV === 'production'

/**
 * A way to allow CI optimization when the build done there is not used
 * to deliver an image or deploy the files.
 * @link https://nextjs.org/docs/advanced-features/source-maps
 */
const disableSourceMaps = process.env.NEXT_DISABLE_SOURCEMAPS === 'true'
if (disableSourceMaps) {
  console.log('[INFO]: Sourcemaps generation have been disabled through NEXT_DISABLE_SOURCEMAPS')
}

// Example of setting up secure headers
// @link https://github.com/jagaapple/next-secure-headers
const { createSecureHeaders } = require('next-secure-headers')
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

/**
 *  Next.js configuration object
 *  @type {import('next/types').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: !disableSourceMaps,
  // i18n,
  // experimental: {
  //   esmExternals: true,
  // },
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

  webpack: (config, options) => {
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

const plugins = [withTM, withMDX]

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  })
  plugins.push(withBundleAnalyzer)
}

const config = withPlugins([...plugins], nextConfig)

module.exports = config
