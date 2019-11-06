module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'vue/arrow-spacing': 'error',
    'vue/camelcase': 'error',
    'vue/key-spacing': 'error',
    'vue/attributes-order': 'off',
    'vue/order-in-components': 'off',
    'vue/require-prop-types': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-prototype-builtins': 'off',
    'no-trailing-spaces': 'warn',
    'nonblock-statement-body-position': [
      'error',
      'below',
    ],
    'brace-style': [
      'warn',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    'linebreak-style': [
      'warn',
      'windows',
    ],
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
