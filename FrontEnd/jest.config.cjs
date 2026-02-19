module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|svg|gif|webp)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js']
};
