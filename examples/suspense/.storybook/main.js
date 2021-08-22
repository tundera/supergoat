const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: [toPath('src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)')],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    reactDocgen: false,
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      child_process: false,
    }

    config.resolve.plugins = config.resolve.plugins ?? []
    config.resolve.plugins.push(new TsconfigPathsPlugin())

    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': toPath('node_modules/@emotion/react'),
      '@emotion/styled': toPath('node_modules/@emotion/styled'),
      'emotion-theming': toPath('node_modules/@emotion/react'),
    }

    // Replaces the webpack rule that loads SVGs as static files to leave out SVG files for us to handle
    const indexOfRuleToRemove = config.module.rules.findIndex((rule) =>
      rule.test.toString().includes('svg'),
    )
    config.module.rules.splice(indexOfRuleToRemove, 1, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
        esModule: false,
      },
    })

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
