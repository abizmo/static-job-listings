module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint-config-prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {},
  globals: {
    JSX: 'readonly',
  },
};
