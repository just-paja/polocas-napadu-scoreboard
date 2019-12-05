const base = require('./jest.config.base.js')

module.exports = {
  projects: [
    '<rootDir>/packages/scoreboard/jest.config.js',
  ],
  coverageDirectory: '<rootDir>/coverage/'
}
