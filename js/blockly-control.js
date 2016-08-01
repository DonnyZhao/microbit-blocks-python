'use strict';

/** Application namespace. */
var uBitBlocksPy = uBitBlocksPy || {};

uBitBlocksPy.generatePythonCode = function() {
  return Blockly.Python.workspaceToCode(Blockly.mainWorkspace);
};
