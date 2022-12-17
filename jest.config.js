module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(xxxx.*?\\.js$))"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  testEnvironment: 'jsdom',
};