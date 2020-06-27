const jestPreset = require("@testing-library/react-native/jest-preset");

module.exports = {
  preset: "jest-expo",
  setupFiles: [...jestPreset.setupFiles, "./jest.config.js"],
  collectCoverage: true,
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
