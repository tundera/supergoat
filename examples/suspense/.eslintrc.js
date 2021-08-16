module.exports = {
  root: true,
  extends: [
    '../../.eslintrc.js',
    'plugin:jsx-a11y/recommended',
    'plugin:@next/next/recommended',
    'plugin:testing-library/react',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    '@next/next/no-img-element': 'warn',
  },
  overrides: [
    {
      files: ['next.config.js'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2020,
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
      },
    },
    {
      files: ['src/pages/**/*.ts', 'src/pages/**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['**/*.devtool.ts', '**/*.devtool.tsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
