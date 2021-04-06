
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
    ')/)',
  ],
  setupFiles: ['./jest.setup.js'],
  moduleDirectories: [
    'node_modules',
    // 'source'
  ],
  // 'snapshotSerializers': [
  //   'enzyme-to-json/serializer'
  // ],
  // 'setupFiles': [
  //   'raf/polyfill',
  //   '<rootDir>/test/setupTests.js'
  // ],

}