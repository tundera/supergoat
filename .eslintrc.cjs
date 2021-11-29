/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: [
      'tsconfig.eslint.json',
      'packages/*/tsconfig.json',
      'examples/*/tsconfig.json',
      'internal/*/tsconfig.json',
      'services/*/tsconfig.json',
    ],
    extraFileExtensions: ['.mjs', '.cjs', '.md', '.mdx'],
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: [
          'tsconfig.eslint.json',
          'packages/*/tsconfig.json',
          'examples/*/tsconfig.json',
          'internal/*/tsconfig.json',
          'services/*/tsconfig.json',
        ],
      },
    },
    react: {
      version: 'detect',
    },
    next: {
      rootDir: 'examples/nextjs',
    },
  },
  overrides: [
    {
      files: ['**/*.cjs', '**/*.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/test/**', '**/__tests__/**'],
      env: {
        'jest/globals': true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: [
          'tsconfig.eslint.json',
          'packages/*/tsconfig.test.json',
          'examples/*/tsconfig.test.json',
          'internal/*/tsconfig.test.json',
          'services/*/tsconfig.test.json',
        ],
        extraFileExtensions: ['.mjs', '.cjs', '.md', '.mdx'],
      },
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: [
              'tsconfig.eslint.json',
              'packages/*/tsconfig.test.json',
              'examples/*/tsconfig.test.json',
              'internal/*/tsconfig.test.json',
              'services/*/tsconfig.test.json',
            ],
          },
        },
      },
    },
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx', '**/cypress/**'],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended', 'plugin:prettier/recommended'],
      parserOptions: {
        project: '**/cypress/tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: ['tsconfig.eslint.json', 'examples/*/cypress/tsconfig.json'],
          },
        },
      },
    },
    {
      files: ['**/scripts/**'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
