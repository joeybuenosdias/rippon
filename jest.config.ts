import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return await Promise.resolve({
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.{ts,tsx}",
      "!src/index.tsx"
    ],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
      "<rootDir>/setupTests.js"
    ]
  })
};