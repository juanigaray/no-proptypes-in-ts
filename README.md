# eslint-plugin-no-proptypes-in-ts

Rules to prevent the use of proptypes in Typescript files.

## Why?

- Proptypes are useful when working with javascript mainly because it doesn't have static type checks
- The usefulness of runtime type checks decreases as more of your codebase is in typescript
- Proptypes and default props in typescript can be a pain and show hard to solve errors

In short: save for specific use cases, proptypes aren't worth maintaining in typescript.

## Installation

#### Prerequisites

Install [ESLint](http://eslint.org/). ESLint installation instructions can be found [here](https://eslint.org/docs/user-guide/getting-started).

#### Plugin installation

Install eslint-plugin-no-proptypes-in-ts

    npm i eslint-plugin-no-proptypes-in-ts --save-dev

Add the plugin to your `.eslintrc` configuration.

    ...
    "plugins": [
        "no-proptypes-in-ts"
    ],
    ...

Configure the rules. [More information](https://eslint.org/docs/user-guide/configuring#configuring-rules)

    "rules": {
        "no-proptypes-in-ts/no-proptypes-field-assignment": "error",
        ...
    }

---

Page: https://github.com/JuanGaray93/no-proptypes-in-ts

Contributions more than welcome!
