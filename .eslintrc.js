module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb', 'prettier', 'airbnb-typescript'],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/require-default-props': 'off',
  },
};
