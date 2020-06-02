module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: [
    "<rootDir>/jest.init.js"
  ],
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
};
