const configuration = require('./configuration.js');
const core = require('./core.js');
const globals = require('./globals.js');

/**
 * Main entry point, set up configuration and start engine.
 */
module.exports.loop = function () {
    globals.Memory.configuration = configuration.base;
    core.tick(globals);
};