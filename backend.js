module.exports = {
  extends: ['airbnb/base', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'jest'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  env: { jest: true, given: true },
  rules: {
    complexity: ['warn', 4],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignorePattern: '^import.*',
      },
    ],
    'object-curly-newline': ['error', { consistent: true }],
    'prefer-destructuring': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
