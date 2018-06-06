module.exports = {
  root: true,
  plugins: ['react', 'html'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:react/recommended'],
  settings: {
    "import/core-modules": [
      "@views",
      "@comps",
      "@utils",
      "@static",
      "@img",
      "@styles"
    ]
  },
  rules: {
    'semi':[2, 'never'],
    'comma-dangle':[2,'never'],
    'no-console': 1,
    'no-unused-vars': 1,
    'no-underscore-dangle':0,
    'no-restricted-globals':0,
    'no-param-reassign':0,
    'max-len':0,
    'func-names':0,
    'no-useless-constructor':0,
    'class-methods-use-this':0,
    'import/no-extraneous-dependencies':0,
    'import/no-unresolved': 0,
    'import/extensions':0,
    'import/no-dynamic-require':0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 1,
    'react/no-string-refs':0,
    'react/no-multi-comp':0,
    'react/jsx-filename-extension':0,
    'react/prefer-stateless-function':0,
    'react/jsx-no-bind':0,
    'react/no-array-index-key':0,
    'react/no-unused-prop-types':0,
    'jsx-a11y/anchor-is-valid':0,
    'jsx-a11y/click-events-have-key-events':0,
    'jsx-a11y/no-static-element-interactions':0,
    'jsx-a11y/interactive-supports-focus':0,
    'jsx-a11y/label-has-for':0
  }
}
