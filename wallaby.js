module.exports = wallaby => {
  return {
    files: [
      'package.json',
      '**/*.js',
      '**/*.jsx',
      '!**/*.test.js',
      '!**/*.test.jsx',
      '!**/*.spec.js',
      '!**/*.spec.jsx',
      '!node_modules/**/*',
      '!./*.js',
      '!dist/**/*',
    ],
    tests: [
      '**/*.test.js',
      '**/*.test.jsx',
      '**/*.spec.js',
      '**/*.spec.jsx',
      '!node_modules/**/*',
    ],

    // runMode: 'onsave',

    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
      '**/*.jsx': wallaby.compilers.babel(),
    },
  };
};
