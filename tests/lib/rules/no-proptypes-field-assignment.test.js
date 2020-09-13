"use strict";

// we import the no-proptypes-field-assignment ESLint rule
const typeCheckRule = require("../../../lib/rules/no-proptypes-field-assignment");

const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

// Here we pass the 'unexpected' messageId since it is the error we expect to be reported by the rule
const errors = [{ messageId: "unexpected" }];

const nonCoveredValidEdgeCase = {
  filename: "Square.tsx",
  code: "anyNonReactObject.propTypes = { a: 3 };",
  errors,
};

// Our test run with all the different test cases
ruleTester.run("no-proptypes-field-assignment", typeCheckRule, {
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
    {
      filename: "Square.tsundere.jsx", // Not .ts
      code: "Square.propTypes = { a: PropTypes.string };",
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
