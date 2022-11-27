module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**', '!<rootDir>/src/**/*-protocols.ts', '!<rootDir>/src/domain/models/**', '!<rootDir>/src/domain/usecases/**', '!<rootDir>/src/**/protocols/**', '!<rootDir>/src/**/test/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  // testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' } )
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
