module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint-config-airbnb-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 4],
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off"
  }
}
