/** @type { import("eslint").Linter.Config } */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': ['error'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
