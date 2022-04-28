module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.js",
    "<rootDir>/src/pages/**/*.js",
    "<rootDir>/src/hooks/**/*.js",
    "<rootDir>/store/**/*.js",
  ],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
