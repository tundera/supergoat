/**
 * @type {import('@babel/core').ParserOptions}
 */
module.exports = {
  babelrcRoots: ['.', 'examples/*', 'packages/*', 'internal/*', 'services/*', 'scripts'],
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
        exclude: [
          '@babel/plugin-transform-async-to-generator',
          '@babel/plugin-transform-regenerator',
        ],
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}
