# eslint-config

Shareable ESLint config. See the [ESLint docs](https://eslint.org/docs/user-guide/configuring) for installation instructions.

## How to use

```json
{
  "extends": [
    "@stefanprobst/eslint-config",
    // Add eslint cypress plugin for `*.test.e2e.@(ts|tsx)` files.
    "@stefanprobst/eslint-config/cypress",
    // Add eslint jest and testing-library plugins for `*.test.@(ts|tsx)` files.
    "@stefanprobst/eslint-config/jest",
    // Add eslint next.js plugin.
    "@stefanprobst/eslint-config/next",
    // Add eslint storybook plugin for `*.storybook.@(ts|tsx)` files.
    "@stefanprobst/eslint-config/storybook",
    // Add recommended typescript-eslint rules which require type-echecking.
    "@stefanprobst/eslint-config/type-checking",
  ]
}
```