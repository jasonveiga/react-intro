module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-console': 0,
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      {
        singleQuote: true,
        semi: false
      }
    ]
  }
}
