/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ["**/*.test.@(ts|tsx)"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
    },
  ],
};

module.exports = config;
