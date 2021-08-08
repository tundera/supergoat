/**
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
  babelrcRoots: ['.', 'examples/*', 'packages/*', 'sites/*', 'services/*', 'db', 'scripts'],
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
}
