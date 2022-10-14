module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint-config-airbnb-typescript',
    'plugin:i18next/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 4],
    "@typescript-eslint/indent": ["error", "tab"],
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/comma-dangle": "off"
  }
}
