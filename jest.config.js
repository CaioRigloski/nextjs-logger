export default {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',  // Configura o Jest para usar babel-jest para transformar arquivos JS/JSX
  },
  setupFilesAfterEnv: ['./setup-tests.js'],
  testEnvironment: 'jest-environment-jsdom',  // Configura o ambiente de testes para o DOM
}
