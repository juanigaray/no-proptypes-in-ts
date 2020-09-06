"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  "no-proptypes-in-ts": {
    meta: {
      docs: {
        description: "Proptypes shouldn't be used in typescript files",
      },
      schema: [], // no options
      messages: {
        unexpected: "Proptypes in a typescript file",
      },
    },
    create: function (context) {
      const fileName = context.getFilename();
      const isTs = fileName.includes(".ts") || fileName.includes(".tsx");
      return {
        AssignmentExpression(node) {
          const assigneePropertyName = node.left.property.name;
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
  },
};
