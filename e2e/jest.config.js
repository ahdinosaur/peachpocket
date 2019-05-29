module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    '<rootDir>/setup.ts',
  ],
  reporters: [
    'detox/runners/jest/streamlineReporter',
  ],
  verbose: true,
}
