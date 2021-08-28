/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['../.eslintrc.js', 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  overrides: [],
}
