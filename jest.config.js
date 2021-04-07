
const { defaults } = require('jest-config')

module.exports = {
  bail: true,
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(' +
    '|@react-native' +
    '|react-native' +
    '|react-native-config' +
    '|react-native-navigation' +
    '|@react-native-community/async-storage' +
    ')/)',
  ],
  setupFiles: ['./jest.setup.js', '<rootDir>/src/setupTests.js'],
  moduleDirectories: [
    'node_modules',
    // 'source'
  ],
  unmockedModulePathPatterns: [
    'node_modules/react/',
    'node_modules/enzyme/'
  ],
  testEnvironment: 'jsdom',
  snapshotSerializers: ['enzyme-to-json/serializer']
}