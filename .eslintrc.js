module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      'babel-module': {},
    },
  },
};
