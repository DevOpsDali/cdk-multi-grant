module.exports = {
  verbose: true,
  // eslint-disable-next-line global-require
  moduleFileExtensions: [...require('jest-config').defaults.moduleFileExtensions, 'ts', 'tsx'],
  modulePathIgnorePatterns: ['./dist'],
  testEnvironment: '<rootDir>/lib/test/environment.ts',
  collectCoverageFrom: ['lib/*.ts'],
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'lcov'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
}
