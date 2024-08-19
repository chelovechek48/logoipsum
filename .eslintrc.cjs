module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/strongly-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'vue/max-attributes-per-line': 'off',
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@views', './src/views'],
          ['@styles', './src/styles'],
          ['@icons', './src/assets/icons'],
          ['@images', './src/assets/images'],
          ['@json', './src/assets/json'],
        ],
      },
    },
  },
};
