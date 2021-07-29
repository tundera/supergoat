/**
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
  presets: ['next/babel'],
  plugins: ['superjson-next', '@babel/plugin-proposal-do-expressions'],
}
