'use strict';

var Blockly = require('./_blockly')

Blockly.Cpp = require('./lib/cpp_compressed')(Blockly);

module.exports = Blockly;
