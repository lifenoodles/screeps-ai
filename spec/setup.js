const globals = require('../src/state.js');

module.exports.testInit = function() {
    const memory = {};
    const game = {};
    globals.memory = function() { return memory; };
    globals.memory = function() { return game; };
};