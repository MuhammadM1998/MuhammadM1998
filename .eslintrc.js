module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  plugins: ['prettier'],

  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        vueIndentScriptAndStyle: true,
      },
    ],
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
};
