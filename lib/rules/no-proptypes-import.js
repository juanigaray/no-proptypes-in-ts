"use strict";

// Helpers
const requiresPropTypes = (node) =>
  node.declarations.some((variableDeclarator) => {
    const callExpression = variableDeclarator.init;
    const callee = callExpression && callExpression.callee;
    const isRequirement = (callee && callee.name) === "require";
    const callArgs = callExpression && callExpression.arguments;
    const isProptypesRequirement =
      isRequirement &&
      callArgs.some((literal) => literal.value === "prop-types");
    return isProptypesRequirement;
  });

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description:
        "Disallows importing from the 'prop-types' package in typescript files",
      recommended: false,
    },
    fixable: null,
    schema: [], // no options
    messages: {
      unexpected: "'prop-types' import in a typescript file",
    },
  },
  create: function (context) {
    const fileName = context.getFilename();
    const isTs = fileName.endsWith(".ts") || fileName.endsWith(".tsx");
    return {
      // Static import statement
      ImportDeclaration(node) {
        const importedPackageName = node.source.value;
        if (isTs && importedPackageName === "prop-types") {
          context.report({ node, messageId: "unexpected" });
        }
      },
      // CommonJS require() syntax
      VariableDeclaration(node) {
        if (isTs && requiresPropTypes(node)) {
          context.report({ node, messageId: "unexpected" });
        }
      },
    };
  },
};
