/**
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  // plugins: [
  //   [
  //     'module-resolver',
  //     {
  //       root: ['.'],
  //       alias: {
  //         src: './packages/theme/src',
  //         test: './packages/theme/test',
  //       },
  //     },
  //   ],
  // ],
}
