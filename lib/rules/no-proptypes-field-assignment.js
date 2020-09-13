"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description:
        "Disallows the assignment to a proptypes field in typescript files",
      recommended: false,
    },
    fixable: null,
    schema: [], // no options
    messages: {
      unexpected: "assigning to the propTypes field in a typescript file",
    },
  },
  create: function (context) {
    const fileName = context.getFilename();
    const isTs = fileName.endsWith(".ts") || fileName.endsWith(".tsx");
    return {
      AssignmentExpression(node) {
        const assigneePropertyName =
          node.left.property && node.left.property.name;
        if (
          isTs &&
          node.operator === "=" &&
          assigneePropertyName === "propTypes"
        ) {
          context.report({ node, messageId: "unexpected" });
        }
      },
    };
  },
};
