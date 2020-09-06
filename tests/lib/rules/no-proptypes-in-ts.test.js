"use strict";


// we import the check-before-type-validation ESLint rule
const typeCheckRule = require("../../../lib/rules/no-proptypes-in-ts");

const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

// Here we pass the 'unexpected' messageId since it is the error we expect to be reported by the rule
const errors = [{ messageId: "unexpected" }];

// Our test run with all the different test cases
ruleTester.run("type-check", typeCheckRule, {
  valid: [
    {
      filename: "Square.tsx",
      code: "Square.height = 3;",
      errors,
    },
    {
      filename: "Square.ts",
      code: "// There are no proptypes here!",
      errors,
    },
    {
      filename: "Square.jsx",
      code: "Square.propTypes = { a: PropTypes.string }; // in jsx",
      errors,
    },
  ],
  invalid: [
    {
      filename: "Square.tsx",
      code: "Square.propTypes = { a: PropTypes.string }; // in tsx",
      errors,
    },
  ],
});
