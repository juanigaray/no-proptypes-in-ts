"use strict";

// we import the no-proptypes-import ESLint rule
const typeCheckRule = require("../../../lib/rules/no-proptypes-import");

const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

// Here we pass the 'unexpected' messageId since it is the error we expect to be reported by the rule
const errors = [{ messageId: "unexpected" }];

// Our test run with all the different test cases
ruleTester.run("no-proptypes-import", typeCheckRule, {
  valid: [
    {
      filename: "Square.tsx",
      code: "import { Icon } from '@material-ui/core'",
      errors,
    },
    {
      filename: "Square.ts",
      code: "// There are no prop-types here!",
      errors,
    },
    {
      filename: "Square.jsx",
      code: "import PropTypes from 'prop-types' // in js",
      errors,
    },
    {
      filename: "Square.jsx",
      code: "const PropTypes = require('prop-types'); // in js ",
      errors,
    },
  ],
  invalid: [
    {
      filename: "Square.tsx",
      code: "import PropTypes from 'prop-types'",
      errors,
    },
    {
      filename: "Square.tsx",
      code: "const PropTypes = require('prop-types');",
      errors,
    },
  ],
});
