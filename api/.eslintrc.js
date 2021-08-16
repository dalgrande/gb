module.exports = {
  extends: 'airbnb-base',
  root: true,
  rules: {
    'import/no-unresolved': [2, { caseSensitive: true, commonjs: true }],
    'arrow-parens': [2, 'as-needed'],
    'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }],
    'no-confusing-arrow': ['error', { allowParens: true }],
  },
  settings: {
    'import/resolver': 'node',
  },
  env: {
    jest: true,
    node: true,
  },
};
