export default {
  coverageDirectory: '../coverage',
  preset: 'ts-jest/presets/default-esm',
  rootDir: './src',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: { 
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      useESM: true,
      tsconfig: {
        verbatimModuleSyntax: false
      }
    }] 
  },
};
