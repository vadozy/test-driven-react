module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
    react: {
      version: '16.12.0',
    },
  },
  overrides: [
    // makes sure eslint-plugin-jest runs for tests only
    Object.assign(
      {
        files: ['**/*test.js', '**/*spec.js'],
        env: { jest: true },
        plugins: ['jest'],
      },
      require('eslint-plugin-jest').configs.recommended
    ),
  ],
};
