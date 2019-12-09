const base = require("../../jest.config.base.js");
const pack = require('./package');

module.exports = {
  // displayName: 'Scoreboard',
  // name: pack.name,
  displayName: 'linter',
  runner: 'jest-runner-standard',
  testMatch: [
    '<rootDir>/**/*.{js,jsx}'
  ],
  testPathIgnorePatterns: [
    '/build/',
    '/coverage/',
    '/node_modules/',
    '/static/'
  ]
};
