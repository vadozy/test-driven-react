module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline',
      },
    ],
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    // makes sure eslint-plugin-jest runs for tests only
    {
      files: [
        '**/*test.js',
        '**/*test.jsx',
        '**/*spec.js',
        '**/*spec.jsx',
        '**/jestSetup.js',
      ],
      env: { jest: true },
      plugins: ['jest'],
      ...require('eslint-plugin-jest').configs.recommended,
    },
  ],
};
