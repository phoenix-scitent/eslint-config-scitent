module.exports = {
  extends: ['airbnb/base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignorePattern: '^import.*',
      },
    ],
    'object-curly-newline': ['error', { consistent: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prefer-destructuring': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
