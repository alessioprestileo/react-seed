module.exports = {
  rootDir: '../',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/(*.test).ts?(x)'],
  coverageDirectory: 'test-coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupTestFrameworkScriptFile: './test/test-setup.ts',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/test/__mocks__/styleMock.ts',
  },
};
