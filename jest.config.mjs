// eslint-disable-next-line import/extensions
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './setupTests.js',
  ],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testPathIgnorePatterns: ['<rootDir>/e2e'],
};

export default createJestConfig(config);
